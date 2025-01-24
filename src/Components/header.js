export default function Header(){
    return`
   
        <nav>
            <ul class="conteiner1">
                <li class="logo"><a href="#" class="link" data-rota="home"><img class="whale-logo link" src="src/Images/logo.jpg" width="50px" height="50px" alt="WhaleQuiz"></a></li>
                <li class="criar">
                    <a href="#" class="link" data-rota="quizCriar"><i class="fa-solid fa-plus"></i>Criar</a>
                </li>
                <li class="pesquisar">
                    <input type="text" name="pesquisar-quiz" id="pesquisar-quiz" placeholder="Pesquisar Quiz">
                </li>
                <li class="entrar">
                    <a href="#" class="link" data-rota ="login">Entrar</a>
                </li>
                <li class="registrar">
                    <a href="#" class="link" data-rota="registro" >Registrar</a>
                </li>
            </ul>
        </nav> 
    
    `;
}