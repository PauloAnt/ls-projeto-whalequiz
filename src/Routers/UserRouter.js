import { Router } from 'express';
import UserController from '../Controllers/UserController.js';

const router = Router();
const controller = new UserController();

router.post('/login', (req, res) => controller.login(req, res));
router.post('/register', (req, res) => controller.register(req, res))

export default router;