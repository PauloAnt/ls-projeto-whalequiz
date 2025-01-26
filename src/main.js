import carregarPagina from "./Scripts/carregarPagina.js"
import header from "./Components/header.js"
import footer from "./Components/footer.js"

import { quizzes } from "./Database/quizzes.js"
import { users } from "./Database/users.js"

document.getElementById("header").innerHTML = header()
document.getElementById("footer").innerHTML = footer()

carregarPagina("src/Pages/Home/home.html", "app");

localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem('quizzes', JSON.stringify(quizzes));

const rotas = (rota) => {
  if (rota == "registro"){
      carregarPagina("src/Pages/Registro/Registro.html", "app");
  }
  else if (rota == "home"){
    carregarPagina("src/Pages/Home/home.html", "app");
  }
  else if (rota == "login"){
    carregarPagina("src/Pages/Login/Login.html", "app");
  }
  else if (rota == "quizResponder"){
    carregarPagina("src/Pages/QuizResponder/QuizResponder.html", "app");
  }
  else if (rota == "quizCriar"){
    carregarPagina("src/Pages/QuizCriar/QuizCriar.html", "app");
  }
  
  else if (rota == "quiz"){
    carregarPagina("src/Pages/Quiz/Quiz.html", "app");
  }
  else if (rota == "perfil"){
    carregarPagina("src/Pages/Perfil/Perfil.html", "app");
  }
  
  else if (rota == "about"){
    carregarPagina("src/Pages/About/About.html", "app");
  }
  
  
}

document.querySelectorAll(".link").forEach((evento)=>{
  evento.addEventListener('click', () =>{
    const rota = evento.getAttribute("data-rota");
    rotas(rota);
  })
  
})


