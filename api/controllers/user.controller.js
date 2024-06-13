import prisma from "../lib/prisma.js";
import bcrypt, { hash } from "bcrypt";


const getUsers = async (req, res) => {
    try{
        const users = await prisma.user.findMany({
            select: { 
                id: true,
                email: true,
                username: true,
                avatar: true,
                createdAt: true
            }
        });

        res.status(200).json(users);
    }catch(error) {
        console.log(error);
        res.status(500).send({ message: "Failed to get users." });
    }
}

const getUser = async (req, res) => {
    const id = req.params.id;

    try{
        const users = await prisma.user.findUnique({
            where: { id },
            select: { 
                id: true,
                email: true,
                username: true,
                avatar: true,
                createdAt: true
            }
        });

        res.status(200).json(users);

    }catch(error) {
        console.log(error);
        res.status(500).send({ message: "Failed to get user." });
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const { password, avatar, ...inputs } = req.body;

    if(id !== tokenUserId) {
        return res.status(403).json({ message: "Not authorized!!" });
    }

    let updatedPassword = null;

    try{

        if(password) {
            updatedPassword = await bcrypt.hash(password, 10); 
        }

        const updatedUser = await prisma.user.update({
                                where: { id },
                                data: { 
                                    ...inputs, 
                                    ...(updatedPassword && { password: updatedPassword }),
                                    ...(avatar && { avatar })
                                }
                            });
        const {password:userPassword, ...rest} = updatedUser;
        
        res.status(200).send(rest);
    }catch(error) {
        console.log(error);
        res.status(500).send({ message: "Failed to update user." });
    }
}

const deleteUser = async(req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;

    if(id !== tokenUserId) {
        return res.status(403).json({ message: "Not authorized." });
    }

    try{
        await prisma.user.delete({
            where: { id }
        });

        res.status(200).json({
            "message" : "Successfully deleted."
        });
    }catch(error) {
        console.log(error);
        res.status(500).send({ message: "Failed to delete user." });
    }
}

export { getUsers, getUser, updateUser, deleteUser };