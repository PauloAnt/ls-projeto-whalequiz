import carregarPagina from "./Scripts/carregarPagina.js";
import header from "./Components/header.js";
import footer from "./Components/footer.js";

import { quizzes } from "./Database/quizzes.js";
import { users } from "./Database/users.js";

import quizCard from "./Components/quizCard.js";

document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();

localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem('quizzes', JSON.stringify(quizzes));

carregarPagina("src/Pages/Home/home.html", "app").then(() => {
    let card_quiz = localStorage.getItem("quizzes");
    card_quiz = JSON.parse(card_quiz);
    
    card_quiz.forEach((q) => {
        let data = quizCard(q.nome, q.descricao, q.id);
        const container = document.getElementById("all-quizzes");
        if (container) {
            container.insertAdjacentHTML("beforeend", data);
        } else {
            console.error("Elemento 'all-quizzes' não encontrado.");
        }
    });

    card_quiz.slice(0,4).forEach((q) => { 
      let data = quizCard(q.nome, q.descricao, q.id);
      const container = document.getElementById("quizzes-populares");
      if (container){
        container.insertAdjacentHTML("beforeend", data)
      }
      else {
        console.error("Elemento 'all-quizzes' não encontrado.");
      }
    });

});

const rotas = (rota) => {
    if (rota == "registro") {
        carregarPagina("src/Pages/Registro/Registro.html", "app");
    } else if (rota == "home") {
        carregarPagina("src/Pages/Home/home.html", "app").then(() => {
            let card_quiz = localStorage.getItem("quizzes");
            card_quiz = JSON.parse(card_quiz);
            console.log(card_quiz);
            console.log(typeof card_quiz);

            card_quiz.forEach((q) => {
                const container = document.getElementById("all-quizzes");
                if (container) {
                    container.insertAdjacentHTML("beforeend", quizCard(q.nome, q.descricao, q.id));
                } else {
                    console.error("Elemento 'all-quizzes' não encontrado.");
                }
            });
        });
    } else if (rota == "login") {
        carregarPagina("src/Pages/Login/Login.html", "app");
    } else if (rota == "quizResponder") {
        carregarPagina("src/Pages/QuizResponder/QuizResponder.html", "app");
    } else if (rota == "quizCriar") {
        carregarPagina("src/Pages/QuizCriar/QuizCriar.html", "app");
    } else if (rota == "quiz") {
        carregarPagina("src/Pages/Quiz/Quiz.html", "app");
    } else if (rota == "perfil") {
        carregarPagina("src/Pages/Perfil/Perfil.html", "app");
    } else if (rota == "about") {
        carregarPagina("src/Pages/About/About.html", "app");
    }
};

document.querySelectorAll(".link").forEach((evento) => {
    evento.addEventListener('click', () => {
        const rota = evento.getAttribute("data-rota");
        rotas(rota);
    });
});
