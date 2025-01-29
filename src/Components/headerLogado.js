export default function headerLogado(){
    return`
        <nav>
            <ul class="conteiner1">
                <li class="logo"><a class="link cursor-pointer" data-rota="home"><img class="whale-logo link" src="src/Images/logo.jpg" width="50px" height="50px" alt="WhaleQuiz"></a></li>
                <li class="criar">
                    <a class="link" data-rota="quizCriar"><i class="fa-solid fa-plus"></i>Criar</a>
                </li>
                <li class="pesquisar">
                    <input type="text" name="pesquisar-quiz" id="pesquisar-quiz" placeholder="Pesquisar Quiz">
                </li>
                <li class="entrar">
                    <a class="link" data-rota="perfil">Perfil</a>
                </li>
                <li class="registrar">
                    <a class="link" data-rota="sobre" >Sobre</a>
                </li>
            </ul>
        </nav> 
    
    `;
}