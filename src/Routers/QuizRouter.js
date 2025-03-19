import { Router } from 'express';
import QuizController from '../Controllers/QuizController.js';
import { checkedToken } from '../Middlewares/checkToken.js';

const router = Router();
const controller = new QuizController();

router.get("/quizzes/:id", (req, res) => controller.findById(req, res));

router.get("/quizzes", (req, res) => controller.findAll(req, res));

router.post("/quizzes", checkedToken, (req, res) => controller.insert(req, res));

router.put("/quizzes", checkedToken, (req, res) => controller.update(req, res));

router.delete("/quizzes/:id", checkedToken, (req, res) => controller.del(req, res));

export default router;