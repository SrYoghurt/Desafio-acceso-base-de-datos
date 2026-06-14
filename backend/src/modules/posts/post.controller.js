import { Prisma } from "@prisma/client";
import { getAllPosts, createPost, deletePost, updateLikes } from "./post.service.js";

export const obtenerPosts = async (req, res) => {
    try {
        const data = await getAllPosts();
        res.json(data);
        return
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Algo ocurrio, no disponible" })
    }
};

export const crearPost = async (req, res) => {
    try {
        const { titulo, descripcion, img } = req.body;
        if (!titulo || !descripcion || !img) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }
        const data = await createPost({ titulo, descripcion, img });
        res.status(201).json({ message: "Post creado con exito", data })
        return
    } catch (error) {
        console.log(error)
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            return res.status(409).json({ message: "datos unicos duplicados" })
        }
        res.status(500).json({ message: "Error al publicar" })
    }
};

export const eliminarPost = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deletePost(Number(id));
        res.status(200).json({ message: "Post eliminado", data })
        return
    } catch (error) {
        console.log(error)
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025"
        ) {
            res.status(404).json({ message: 'Post no encontrado' });
        }
        return res.status(500).json({ message: 'Error al eliminar el post' });
    }
};

export const actualizarLikes = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await updateLikes(Number(id));
        res.status(200).json({ message: "Likes actualizados", data });
    } catch (error) {
        console.log(error);
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2025"
        ){
            return res.status(404).json({message: "Post no encontrado"});
        }
        return res.status(500).json({message: "Error al actualizar los likes"});
    }
}