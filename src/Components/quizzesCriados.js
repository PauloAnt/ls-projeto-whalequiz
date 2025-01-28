export default function quizzesCriados(nome, id){
    return `<div class="quiz-criados">
        <div>
            <p>${nome}</p>
        </div>
        
        <div>
            <button class="bg-blue-500 text-white p-2 rounded cursor-not-allowed opacity-50" disable>Editar</button>
            <button class="background-vermelho deletar" data-id="${id}">Deletar</button>
        </div>
    </div>`
}
    