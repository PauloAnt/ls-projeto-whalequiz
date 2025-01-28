export default function QuizPerguntas(questao, opcoes, correta){
    let conjuntoOpcoes = ""
    let DataCorrect ='data-correct="false"'

    opcoes.forEach(i => {
        if (i === correta){
            DataCorrect = 'data-correct="true"'
        }

        conjuntoOpcoes +=`
                    <div class="option">
                        <input type="radio" id="option1" name="question ${DataCorrect}">
                        <label for="option1">${i}</label>
                    </div>\n
        `

        DataCorrect ='data-correct="false"'
    });

    return `
                   <div class="quiz-perguntas">
                    <h2>${questao}</h2>
                    ${conjuntoOpcoes}
                </div>
    `
};