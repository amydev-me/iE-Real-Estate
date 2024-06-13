import prisma from "../lib/prisma.js";

const getPosts = async(req, res) => {
    try{
        const posts = await prisma.post.findMany({
            include: {
                postDetail: true
            }
        });

        res.status(200).send(posts);
    }catch(error) {
        res.status(500).json({ message: "Failed to get posts."})
    }
}

const getPost = async(req, res) => {
    const id = req.params.id;
    try{
        const post = await prisma.post.findUnique({
            where: { id },
            include:{
                postDetail: true,
                user: {
                    select: {
                        username: true,
                        avatar: true
                    }
                }
            }
        });

        res.status(200).send(post);
    }catch(error) {
        res.status(500).json({ message: "Failed to get post."})
    }
}


const addPost = async(req, res) => { 
    const tokenUserId = req.userId; 
    const  body = req.body;
    
    try{
        const createdPost = await prisma.post.create({
            data: {
                ...body.postData,
                userId: tokenUserId,
                postDetail: {
                    create: body.postDetail
                }
            }
        })

        res.status(201).send(createdPost);
    }catch(error) {
        res.status(500).json({ message: "Failed to add post."})
    }
}


const updatePost = async(req, res) => {
    const id = req.params.id;
    const post = { ...req.body };

    try{
        const updatedPost = await prisma.post.update({
            where: { id },
            data : post
        })
 
        res.status(200).send(updatedPost);
    }catch(error) {
        res.status(500).json({ message: "Failed to update post."})
    }
}

const deletePost = async(req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId; 
    try{
        const post = await prisma.post.findUnique({
            where: { id }
        });

        if(!post) {
            return res.status(404).json({
                message: "Not found post!"
            })
        }

        if(post.userId !== tokenUserId) {
            return res.status(403).json( {
                message: "Not authorized!"
            })
        }

        await prisma.post.delete({
            where: { id }
        });

        res.status(200).json({
            message: "Successfully deleted."
        });
    }catch(error) { 
        res.status(500).json({ message: "Failed to delete post."})
    }
}

export {
    getPosts, getPost, addPost, updatePost, deletePost
}