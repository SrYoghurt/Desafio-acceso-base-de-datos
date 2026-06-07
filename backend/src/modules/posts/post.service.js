import { prisma } from '../../lib/prisma.js';


export const getAllPosts = async () => {
    const posts = await prisma.post.findMany();
    return posts;
};

export const createPost = async (datosPost) => {
    const { titulo, descripcion, img } = datosPost;
    const newPost = await prisma.post.create({
        data: {
            titulo,
            descripcion,
            img
        }
    });
    return newPost;
};