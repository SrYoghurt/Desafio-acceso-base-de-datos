import express from "express";
import cors from "cors";
import postRoutes from "./modules/posts/post.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "API funcionando correctamente"});
});

app.use('/posts', postRoutes)
export default app;