import status from 'http-status';
import QuizService from '../Services/QuizService.js';

export default class QuizController{
    constructor(){
        this.service = new QuizService();
    }

    async findById(req, res){
        const quiz = await this.service.findById(req);

        return res.status(quiz.status).json(quiz);
    }

    async findAll(req, res){
        const quiz = await this.service.findAll();
        return res.status(quiz.status).json(quiz);
    }

    async insert(req, res){
        const quiz = await this.service.insert(req);

        return res.status(quiz.status).json(quiz);
    }

    async update(req, res){
        const quiz = await this.service.update(req);

        return res.status(quiz.status).json(quiz);
    }

    async del(req, res){
        const quiz = await this.service.del(req);

        return res.status(quiz.status).json(quiz);
    }
}