import { Router } from "express";
import { obtenerPosts, crearPost, eliminarPost, actualizarLikes } from "./post.controller.js";
import { updateLikes } from "./post.service.js";

const router = Router();

router.get('/posts', obtenerPosts);

router.post('/posts', crearPost);

router.delete('/posts/:id', eliminarPost);

router.put('/posts/like/:id', actualizarLikes);

export default router;