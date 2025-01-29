export default function QuizPerguntas(questao, opcoes, correta, id) {
    let conjuntoOpcoes = "";

    opcoes.forEach((opcao) => {
        const isCorrect = opcao === correta ? 'data-correct="true"' : 'data-correct="false"';

        conjuntoOpcoes += `
            <div class="option">
                <input type="radio" class="opcao" name="pergunta-${id}" value="${opcao}" ${isCorrect}>
                <label>${opcao}</label>
            </div>\n
        `;
    });

    return `
        <div class="quiz-perguntas" id="pergunta-${id}">
            <h2>${questao}</h2>
            ${conjuntoOpcoes}
        </div>
    `;
}
