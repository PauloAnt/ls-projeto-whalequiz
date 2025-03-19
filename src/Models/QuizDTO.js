export default class QuizDTO {
    constructor(id = null, nome, criador, tema, descricao) {
        this.id = id;
        this.nome = nome;
        this.criador_email = criador;
        this.tema = tema;
        this.descricao = descricao;
    }
}