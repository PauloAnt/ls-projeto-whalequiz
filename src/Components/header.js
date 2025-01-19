export function Header(){
    return`
    <header>
      <nav>
          <ul class="conteiner1">
              <li class="logo"><a href="#"><img class="whale-logo" src="../img-logo/logo.jpg" width="50px" height="50px" alt="WhaleQuiz"></a></li>
              <li class="criar">
                  <a href="#"><i class="fa-solid fa-plus"></i>Criar</a>
              </li>
              <li class="pesquisar">
                  <input type="text" name="pesquisar-quiz" id="pesquisar-quiz" placeholder="Pesquisar Quiz">
              </li>
              <li class="entrar">
                  <a href="#">Entrar</a>
              </li>
              <li class="registrar">
                  <a href="#">Registrar</a>
              </li>
          </ul>
      </nav>  
    </header>
    `;
}