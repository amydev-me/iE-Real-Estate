import prisma from "../lib/prisma.js";



const getChats = async (req, res) => {
    const tokenUserId = req.userId;
    try{
        const chats =   await prisma.chat.findMany({
                            where: {
                                userIDs: {
                                    hasSome: [ tokenUserId ]
                                }
                            }
                        });
        for(const chat of chats) {
            const receiverId = chat.userIDs.find(id => id !== tokenUserId);

            const receiver = await prisma.user.findUnique({
                where: {
                    id: receiverId
                },
                select:{
                    id: true,
                    username: true,
                    avatar: true
                }
            });

            chat.receiver = receiver;
        }
        res.status(200).json(chats);
    }catch(error) {
        console.log(error);
        res.status(500).send({ message: "Failed to get users." });
    }
}

const getChat = async (req, res) => {
    const tokenUserId = req.userId;

    try{
        const chat = await prisma.chat.findUnique({
            where: { 
                id: req.params.id,
                userIDs:{
                    hasSome:[ tokenUserId ]
                }
             },
             include : {
                messages:{
                    orderBy:{
                        createdAt: "asc"
                    }
                }
             }
        });
    

        await prisma.chat.update({
            where:{
                id: req.params.id
            },
            data: {
                seenBy : {
                    push: [ tokenUserId ]
                }
            }
        }) 
        res.status(200).json(chat);

    }catch(error) {
        console.log(error);
        res.status(500).send({ message: "Failed to get chat." });
    }
}

const addChat = async (req, res) => {
    const tokenUserId = req.userId;
    
    try{

        const newChat = await prisma.chat.create({
                                data: {
                                    userIDs: [ tokenUserId, req.body.receiverId]
                                }
                            })
        
        res.status(200).send(newChat);
    }catch(error) {
        console.log(error);
        res.status(500).send({ message: "Failed to update user." });
    }
}

const readChat = async(req, res) => { 
    const tokenUserId = req.userId; 
    try{
        const chat = await prisma.chat.update({
            where:{
                id: req.params.id,
                userIDs:{
                    hasSome: [tokenUserId]
                }
            },
            data: {
                seenBy : {
                    push: [ tokenUserId ]
                }
            }
        });

        res.status(200).json(chat);
    }catch(error) { 
        res.status(500).send({ message: "Failed to read chat." });
    }
}
 
export { getChats, getChat, readChat, addChat };