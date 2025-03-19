export default class QuestionDTO {
    constructor(id = null, quiz_id, questao, opcoes, correto) {
        this.id = id;
        this.quiz_id = quiz_id;
        this.questao = questao;
        this.opcoes = opcoes;
        this.correto = correto;
    }
}
