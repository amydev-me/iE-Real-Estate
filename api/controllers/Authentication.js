import bcrypt, { hash } from "bcrypt";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

const register = async(req, res) => {
    const { username, email, password } = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password, 10); 

        const newUser = await prisma.user.create({
            data: {
              username,
              email,
              password: hashedPassword
            },
        });
        res.status(201).send({message: 'User created succesfully.'});
    }catch(error){
        res.status(500).json({message: 'Failed to create user.'});
    } 
}

const login = async(req, res) => {
    const { username, password } = req.body;

    try{
        const user = await prisma.user.findUnique({
            where:{username}
        });

        if(!user){
            res.status(401).send({ message: 'Invalid credentials.' });
            return;
        } 

        const isPasswordValid = bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            res.status(401).send({message: 'Invalid credentials.'});
            return;
        }

        const maxAge = 1000 * 60 * 60 * 24 * 7; // 1week


        const token = jwt.sign({
            id: user.id, 
            isAdmin: false
        }, process.env.JWT_SECRET_KEY, { expiresIn: maxAge })

        const { password: userPassword, ...userInfo } = user;
        
        res.cookie("token", token, {
            httpOnly:true,
            maxAge
            // secure:true should open in production mode
        }).status(200).send(userInfo)
    }catch(error){
        res.status(500).json({message: 'Failed to login.'}); 
    }
}

const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout Successful." });
}

export { register, login, logout };