import QuestionService from '../Services/QuestionService.js';

export default class QuestionController {
    constructor() {
        this.service = new QuestionService();
    }

    async findById(req, res) {
        const questao = await this.service.findById(req);

        return res.status(questao.status).json(questao);
    }

    async findAll(req, res) {
        const questao = await this.service.findAll();
        return res.status(questao.status).json(questao);
    }

    async insert(req, res) {
        const questao = await this.service.insert(req);

        return res.status(questao.status).json(questao);
    }

    async update(req, res) {
        const questao = await this.service.update(req);

        return res.status(questao.status).json(questao);
    }

    async del(req, res) {
        const questao = await this.service.del(req);

        return res.status(questao.status).json(questao);
    }
}
