import status from 'http-status';
import QuestionRepository from '../Repositories/QuestionRepository.js';
import QuestionDTO from '../Models/QuestionDTO.js';

export default class QuestionService {
    constructor() {
        this.repository = new QuestionRepository();
    }

    async findById(req) {
        const { id } = req.params;

        try {
            const questao = await this.repository.findById(id);

            if (!questao) {
                return {
                    status: status.NOT_FOUND,
                    message: "Questão não encontrada."
                };
            }

            const questaoDTO = new QuestionDTO(questao.id, questao.quiz_id, questao.questao, questao.opcoes, questao.correto);

            return {
                status: status.OK,
                data: questaoDTO
            };
        } catch (err) {
            console.log(`Erro inesperado: ${err.message}`);
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "Erro inesperado no servidor."
            };
        }
    }

    async findAll(req) {
        try {
            const questoes = await this.repository.findAll();

            if (!questoes || questoes.length === 0) {
                return {
                    status: status.NOT_FOUND,
                    message: "Nenhuma questão encontrada."
                };
            }

            const questoesDTO = questoes.map(questao => new QuestionDTO(questao.id, questao.quiz_id, questao.questao, questao.opcoes, questao.correto));

            return {
                status: status.OK,
                data: questoesDTO
            };
        } catch (err) {
            console.log(`Erro inesperado: ${err.message}`);
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "Erro inesperado no servidor."
            };
        }
    }

    async insert(req) {
        const { questaoData } = req.body;
        console.log(questaoData);

        try {
            const newQuestao = await this.repository.insert(questaoData);
            console.log(newQuestao)
            if (!newQuestao) {
                return {
                    status: status.BAD_REQUEST,
                    message: "Erro ao inserir a questão."
                };
            }

            const questaoDTO = new QuestionDTO(newQuestao.quiz_id, newQuestao.questao, newQuestao.opcoes, newQuestao.correto);

            return {
                status: status.CREATED,
                data: questaoDTO
            };
        } catch (err) {
            console.log(`Erro inesperado: ${err.message}`);
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "Erro inesperado no servidor."
            };
        }
    }

    async update(req) {
        const { questaoData } = req.body;

        try {
            const updatedQuestao = await this.repository.update(questaoData);

            if (!updatedQuestao) {
                return {
                    status: status.BAD_REQUEST,
                    message: "Erro ao atualizar a questão."
                };
            }

            const questaoDTO = new QuestionDTO(updatedQuestao.id, updatedQuestao.quiz_id, updatedQuestao.questao, updatedQuestao.opcoes, updatedQuestao.correto);

            return {
                status: status.OK,
                data: questaoDTO
            };
        } catch (err) {
            console.log(`Erro inesperado: ${err.message}`);
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
                    message: "Erro ao deletar a questão."
                };
            }

            return {
                status: status.OK,
                message: "Questão deletada com sucesso."
            };
        } catch (err) {
            console.log(`Erro inesperado: ${err.message}`);
            return {
                status: status.INTERNAL_SERVER_ERROR,
                message: "Erro inesperado no servidor."
            };
        }
    }
}
