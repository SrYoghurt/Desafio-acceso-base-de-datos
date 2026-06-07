import { getAllPosts, createPost } from "./post.service.js";

export const obtenerPosts = async (req, res) => {
    try {
        const data = await getAllPosts();
        res.json(data);
        return
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Algo ocurrio, no disponible"})
    }
};

export const crearPost = async (req, res) => {
    try {
        const { titulo, descripcion, img } = req.body;
        const data = await createPost({titulo, descripcion, img});
        res.status(201).json({ message: "Post creado con exito", data: data })
        return
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error al publicar"})
    }
};