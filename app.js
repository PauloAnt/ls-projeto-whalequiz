import express from "express";
import env from "dotenv";
import QuizRouter from "./src/Routers/QuizRouter.js";
import UserRouter from "./src/Routers/UserRouter.js";
import QuestionRouter from "./src/Routers/QuestionRouter.js";
import cors from 'cors';

// Configurações
env.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Rotas
app.use(express.json());
app.use("/api", QuizRouter);
app.use("/api", UserRouter);
app.use("/api", QuestionRouter);
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.get("/status", (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "Servidor rodando com sucesso."
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso. http://localhost:${PORT}`);
})

export default app;