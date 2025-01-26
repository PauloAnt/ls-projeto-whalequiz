export default function quizCard(nome, descricao, id){
    return `
        <a href="#" class="link" data-rota="" data-id="${id}">
                    
            <div class="card">
                <img class="card-img" src="src/Images/CardImage.png" alt="imagem do card">
                <dl>
                    <dt class="card-name">${nome}</dt>
                    <br>
                    <dd>${descricao}</dd>
                </dl>
            </div>
        </a>
    `
}