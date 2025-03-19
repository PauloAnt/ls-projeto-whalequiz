import { Router } from 'express';
import QuestionController from '../Controllers/QuestionController.js';
import { checkedToken } from '../Middlewares/checkToken.js';

const router = Router();
const controller = new QuestionController();

router.get("/questoes/:id", (req, res) => controller.findById(req, res));

router.get("/questoes", (req, res) => controller.findAll(req, res));

router.post("/questoes", checkedToken, (req, res) => controller.insert(req, res));

router.put("/questoes", checkedToken, (req, res) => controller.update(req, res));

router.delete("/questoes/:id", checkedToken, (req, res) => controller.del(req, res));

export default router;
