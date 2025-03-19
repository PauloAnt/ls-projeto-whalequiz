import status from 'http-status';
import QuizRepository from '../Repositories/QuizRepository.js';
import QuizDTO from '../Models/QuizDTO.js';

export default class QuizService {
    constructor() {
        this.repository = new QuizRepository();
    }
    
    async findById(req) {
        const { id } = req.params;

        try {
            const quiz = await this.repository.findById(id);

            if (!quiz) {
                console.log(`Quiz_ID não encontrado.`);
                return {
                    status: status.NOT_FOUND,
                    message: "Quiz_ID não encontrado."
                };
            }

            const quizDTO = new QuizDTO(quiz.id, quiz.nome, quiz.criador_email, quiz.tema, quiz.descricao);

            return {
                status: status.OK,
                data: quizDTO
            };
        } catch (err) {
            console.log(`Erro inesperado. ${err.message}`);
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "Erro inesperado no servidor."
            };
        }
    }

    async findAll() {
        try {
            const quizzes = await this.repository.findAll();

            if (!quizzes || quizzes.length === 0) {
                return {
                    status: status.NOT_FOUND,
                    message: "Nenhum quiz encontrado."
                };
            }

            const quizzesDTO = quizzes.map(quiz => new QuizDTO(quiz.id, quiz.nome, quiz.criador_email, quiz.tema, quiz.descricao));

            return {
                status: status.OK,
                data: quizzesDTO
            };
        } catch (err) {
            console.log(`Erro inesperado. ${err.message}`);
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "Erro inesperado no servidor."
            };
        }
    }

    async insert(req) {
        const { quizData } = req.body;
        try {
            const newQuiz = await this.repository.insert(quizData);
            if (!newQuiz) {
                return {
                    status: status.BAD_REQUEST,
                    message: "Erro ao inserir o quiz."
                };
            }

            const quizDTO = new QuizDTO(newQuiz.id, newQuiz.nome, newQuiz.criador_email, newQuiz.tema, newQuiz.descricao);
            return {
                status: status.CREATED,
                data: quizDTO
            };
        } catch (err) {
            console.log(`Erro inesperado. ${err.message}`);
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "Erro inesperado no servidor."
            };
        }
    }

    async update(req) {
        const { quizData } = req.body;

        try {
            const updatedQuiz = await this.repository.update(quizData);

            if (!updatedQuiz) {
                return {
                    status: status.BAD_REQUEST,
                    message: "Erro ao atualizar o quiz."
                };
            }

            const quizDTO = new QuizDTO(updatedQuiz.id, updatedQuiz.nome, updatedQuiz.criador_email, updatedQuiz.tema, updatedQuiz.descricao);

            return {
                status: status.OK,
                data: quizDTO
            };
        } catch (err) {
            console.log(`Erro inesperado. ${err.message}`);
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "Erro inesperado no servidor."
            };
        }
    }

    async del(req) {
        const { id } = req.params;

        try {
            const deleted = await this.repository.del(id);

            if (!deleted) {
                return {
                    status: status.BAD_REQUEST,
                    message: "Erro ao deletar o quiz."
                };
            }

            return {
                status: status.OK,
                message: "Quiz deletado com sucesso."
            };
        } catch (err) {
            console.log(`Erro inesperado. ${err.message}`);
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "Erro inesperado no servidor."
            };
        }
    }
}
