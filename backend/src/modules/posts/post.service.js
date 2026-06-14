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

export const deletePost = async (id) => {
    const postBorrado = await prisma.post.delete({
        where: {
            id,
        },
    });
    return postBorrado;
};

export const updateLikes = async (id) => {
    const postActualizado = await prisma.post.update({
        where: {
            id
        },
        data: {
            likes: {
                increment: 1
            }
        }
    });
    return postActualizado;
};