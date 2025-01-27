import carregarPagina from "./Scripts/carregarPagina.js";
import header from "./Components/header.js";
import footer from "./Components/footer.js";

import { quizzes } from "./Database/quizzes.js";
import { users } from "./Database/users.js";

import quizCard from "./Components/quizCard.js";
import quizzesCriados  from "./Components/quizzesCriados.js";
import QuizPerguntas from "./Components/QuizPerguntas.js";
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
    adicionarEventosNosCards();

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
              adicionarEventosNosCards();
            
        });
    } else if (rota == "login") {
        carregarPagina("src/Pages/Login/Login.html", "app");
    } else if (rota === "quizResponder") {
        carregarPagina("src/Pages/QuizResponder/QuizResponder.html", "app").then(() => {
            const quizSelecionadoId = localStorage.getItem("quizz-selecionado-id");
            const card_quiz = JSON.parse(localStorage.getItem("quizzes")); 
            const quizSelecionado = card_quiz.find((quiz) => quiz.id == quizSelecionadoId); 
    
            if (quizSelecionado) {
                document.querySelector(".quiz-responder-text h1").textContent = quizSelecionado.nome;
    
                const formulario = document.getElementById("formulario-quizzes");
                quizSelecionado.quiz.forEach((pergunta) => {
                    formulario.insertAdjacentHTML("beforeend", QuizPerguntas(pergunta.questoes, pergunta.opcoes, pergunta.correto));
                });
            } else {
                console.error("Quiz não encontrado.");
            };
            
            
        });
    } else if (rota == "quizCriar") {
        carregarPagina("src/Pages/QuizCriar/QuizCriar.html", "app").then(() => {
            document.getElementById('add-question').addEventListener('click', () => {
                const container = document.getElementById('perguntas');
                const div = document.createElement('div');
                div.classList.add('question-container');
    
                div.innerHTML = `
                    <input type="text" placeholder="Digite sua pergunta" class="border-cinza questao"/>
                    <input type="text" placeholder="Coloque a opção correta aqui" class="border-verde correto"/>
                    <input type="text" placeholder="Coloque a opção incorreta aqui" class="border-vermelho incorreto"/>
                    <input type="text" placeholder="Coloque a opção incorreta aqui" class="border-vermelho incorreto"/>
                    <input type="text" placeholder="Coloque a opção incorreta aqui" class="border-vermelho incorreto"/>
                `;
    
                container.appendChild(div);
            });
    
            document.querySelector('form').addEventListener('submit', (event) => {
                event.preventDefault();
    
                const perguntas = [];
                const nome = document.querySelector(".nome").value;
                const tema = document.querySelector(".tema").value;
                const descricao = document.querySelector(".descricao").value;
    
                document.querySelectorAll('.question-container').forEach((questionDiv) => {
                    const questao = questionDiv.querySelector('.questao').value;
                    const correto = questionDiv.querySelector('.correto').value;
                    const incorretos = Array.from(
                        questionDiv.querySelectorAll('.incorreto')
                    ).map(input => input.value);
    
                    perguntas.push({
                        pergunta: questao,
                        opcoes: incorretos,
                        correto: correto
                        
                    });
                });
    
                const quizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
                const data = {
                    id: quizzes.length + 1,
                    nome: nome,
                    quiz: perguntas,
                    criador: "teste",
                    tema: tema,
                    descricao: descricao
                };
    
                quizzes.push(data);
                localStorage.setItem('quizzes', JSON.stringify(quizzes));
    
                alert("Quiz criado com sucesso!");
                carregarPagina("src/Pages/Home/home.html", "app");
            });
        });    
    } else if (rota == "quiz") {
        carregarPagina("src/Pages/Quiz/Quiz.html", "app").then(() => {
            const quizzesUsuarioAtual = [] 
            quizzes.forEach((q) => {
                if (q.criador === nome) quizzesUsuarioAtual.push(q);
            }); // Pegar nome de quem está logado atualmente

            quizzesUsuarioAtual.forEach((q) => {
                document.querySelector(".quiz-exists").insertAdjacentHTML('beforeend', quizzesCriados(q.nome, q.id));
            })
            
            document.querySelectorAll(".deletar").addEventListener('click', (e) => {
                const id = e.getAttribute("data-id");
                quizzes.reduce((q) => q.id != id);
                localStorage.setItem('quizzes', quizzes);
            })
            alert("Quiz deletado com sucesso!");
            carregarPagina("src/Pages/Quiz/Quiz.html", "app");
        });
    } else if (rota == "perfil") {
        carregarPagina("src/Pages/Perfil/Perfil.html", "app").then(() => {
            document.querySelector(".usuario").value = "teste"
            document.querySelector(".email").value = "email@email.com"
        });
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


function adicionarEventosNosCards() {
    const elementos = document.querySelectorAll(".data-id");
    console.log("Elementos .data-id encontrados:", elementos.length); 
    if (elementos.length === 0) {
        console.error("Nenhum elemento .data-id encontrado.");
    }

    elementos.forEach((evento) => {
        evento.addEventListener("click", (e) => {
            e.preventDefault();
            const idQuiz = evento.getAttribute("data-id");
            console.log(`ID do Quiz clicado: ${idQuiz}`); 
            localStorage.setItem("quizz-selecionado-id", idQuiz);
            rotas("quizResponder");
        });
    });
}


