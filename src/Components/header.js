export default function Header(){
    return`
   
        <nav>
            <ul class="conteiner1">
                <li class="logo"><a class="link cursor-pointer" data-rota="home"><img class="whale-logo link" src="src/Images/logo.jpg" width="50px" height="50px" alt="WhaleQuiz"></a></li>
                <li class="pesquisar">
                    <input type="text" name="pesquisar-quiz" id="pesquisar-quiz" placeholder="Pesquisar Quiz">
                </li>
                <li class="entrar">
                    <a class="link" data-rota ="login">Entrar</a>
                </li>
                <li class="registrar">
                    <a class="link" data-rota="registro" >Registrar</a>
                </li>
            </ul>
        </nav> 
    
    `;
}