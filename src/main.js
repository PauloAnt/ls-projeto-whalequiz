import carregarPagina from "./Scripts/carregarPagina.js";
import header from "./Components/header.js";
import footer from "./Components/footer.js";
import headerLogado from "./Components/headerLogado.js";

import { quizzes } from "./Database/quizzes.js";
import { users } from "./Database/users.js";

import quizCard from "./Components/quizCard.js";
import quizzesCriados  from "./Components/quizzesCriados.js";
import QuizPerguntas from "./Components/QuizPerguntas.js";

import Login from './Scripts/Login.js'
import { validarRegistro, salvarDados, limpaErros, exibirErro } from './Scripts/Registro.js'


document.getElementById("header").innerHTML = header();
document.getElementById("footer").innerHTML = footer();

localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem('quizzes', JSON.stringify(quizzes));
localStorage.removeItem('sessaoAtual');

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
        carregarPagina("src/Pages/Registro/Registro.html", "app").then(() => {
            const registrar = document.querySelector("#registrar");
            const inputUsuario = document.querySelector("#usuario");
            const inputEmail = document.querySelector("#email");
            const inputSenha = document.querySelector("#senha");
    
            if (registrar) {
                registrar.addEventListener("click", (e) => {
                    e.preventDefault();
                    limpaErros();
    
                    let formValido = true;
    
                    if (!inputUsuario.value.trim()) {
                        exibirErro("msg-usuario", "Nome do usuário não pode ser vazio.");
                        formValido = false;
                    }
    
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(inputEmail.value.trim())) {
                        exibirErro("msg-email", "Email inválido!");
                        formValido = false;
                    }
    
                    if (inputSenha.value.length < 8) {
                        exibirErro("msg-senha", "A senha deve ter pelo menos 8 caracteres.");
                        formValido = false;
                    }
    
                    if (formValido) {
                        salvarDados(inputUsuario, inputEmail, inputSenha);
                        alert("Registrado com sucesso!")
                        rotas("login");
                        
                    }
                });
            } else {
                console.error("Botão de registro não encontrado.");
            }
        });
    } else if (rota == "home") {
        carregarPagina("src/Pages/Home/home.html", "app").then(() => {
            linkBotoes()
            let card_quiz = localStorage.getItem("quizzes");
            card_quiz = JSON.parse(card_quiz);

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
        carregarPagina("src/Pages/Login/Login.html", "app").then((e) => {
            const inputUsuario = document.querySelector("#usuario");
            const inputSenha = document.querySelector("#senha");
            const entrar = document.querySelector("#entrar");
            entrar.addEventListener("click", (e) => {
                e.preventDefault();

                const erroLogin = document.querySelector("#msg-login");
                const usuarioProcurado = inputUsuario.value.trim();
                const senha = inputSenha.value;
                const usuariosRegistrados = JSON.parse(localStorage.getItem("users"));

                const usuarioValido = usuariosRegistrados.find(
                    (usuario) => usuario.nome === usuarioProcurado && usuario.senha === senha
                );

                if (usuarioValido) {
                    localStorage.setItem("sessaoAtual", JSON.stringify(usuarioValido));
                    alert("Logado com sucesso!");
                    document.getElementById("header").innerHTML = headerLogado();
                    linkBotoes();
                    rotas('home');

                } else {
                    erroLogin.textContent = "Usuário ou senha inválidos.";
                    erroLogin.style.color = "red";
                    erroLogin.style.textAlign = "center";
                }
            });
        });
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

            document.getElementById("verificar-respostas").addEventListener("click", verificarRespostas);

            document.addEventListener("click", function (event) {
                const opcaoSelecionada = event.target.closest(".option");
            
                if (opcaoSelecionada) {
                    selecionarOpcao(opcaoSelecionada);
                }
            });
            
            function selecionarOpcao(elemento) {
                const parent = elemento.parentElement;
            
              
                parent.querySelectorAll(".option").forEach(op => op.classList.remove("selecionado"));
            
               
                elemento.classList.add("selecionado");
            
                
                const input = elemento.querySelector("input");
                if (input) {
                    input.checked = true;
                }
            }
            function verificarRespostas() {
                document.querySelectorAll(".quiz-perguntas").forEach(pergunta => {
                    const opcoes = pergunta.querySelectorAll(".option");
                    let opcoesCorretas = 0
                    let qtdOpcoes = 1
                    opcoes.forEach(opcao => {
                        const input = opcao.querySelector("input");
                        const isCorrect = input.getAttribute("data-correct") === "true";
                        qtdOpcoes += 1
                        if (input.checked) {
                            if (isCorrect) {
                                opcao.classList.add("correto");
                                opcoesCorretas += 1
                                
                            } else {
                                opcao.classList.add("errado");
                            }
                            
                           

                        }
                    });
                    const resultado = `Você acertou  ${opcoesCorretas} / ${qtdOpcoes}. Tente novamente mais tarde  -_-`
                    const containerResultado = document.querySelector("#resultado-Quizzes")
                    containerResultado.innerHTML = resultado
                    
                });
            }
            

            
        });
    } else if (rota == "quizCriar") {
        carregarPagina("src/Pages/QuizCriar/QuizCriar.html", "app").then(() => {
            document.getElementById('add-question').addEventListener('click', () => {
                const container = document.getElementById('perguntas');
        
                const inputs = `
                    <input type="text" placeholder="Digite sua pergunta" class="border-cinza questao"/>
                    <input type="text" placeholder="Coloque a opção correta aqui" class="border-verde correto"/>
                    <input type="text" placeholder="Coloque a opção incorreta aqui" class="border-vermelho incorreto"/>
                    <input type="text" placeholder="Coloque a opção incorreta aqui" class="border-vermelho incorreto"/>
                    <input type="text" placeholder="Coloque a opção incorreta aqui" class="border-vermelho incorreto"/>
                `;
        
                container.insertAdjacentHTML('beforeend', inputs);
            });
        
            document.querySelector('form').addEventListener('submit', (event) => {
                event.preventDefault();
        
                let perguntas = [];
                const nome = document.querySelector(".nome").value;
                const tema = document.querySelector(".tema").value;
                const descricao = document.querySelector(".descricao").value;
        
                const questoes = Array.from(document.querySelectorAll('.questao')).map(q => q.value);
                const corretos = Array.from(document.querySelectorAll('.correto')).map(c => c.value);
                const incorretos = Array.from(document.querySelectorAll('.incorreto')).map(i => i.value);
        
                questoes.forEach((questao, index) => {
                    const opcoes = [...incorretos.slice(index * 3, (index + 1) * 3), corretos[index]];
                    perguntas.push({
                        questoes: questao,
                        opcoes: opcoes,
                        correto: corretos[index]
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
                rotas("home");
            });
        });
    } else if (rota == "perfil") {
        carregarPagina("src/Pages/Perfil/Perfil.html", "app").then(() => {
            const usuarioLogado = JSON.parse(localStorage.getItem('sessaoAtual'));
            document.querySelector(".usuario").value = usuarioLogado.nome
            document.querySelector(".email").value = usuarioLogado.email

            const quizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
            const quizzesUsuarioAtual = [] 
            quizzes.forEach((q) => {

                if (q.criador === usuarioLogado.email) quizzesUsuarioAtual.push(q);
            });

            quizzesUsuarioAtual.forEach((q) => {
                document.querySelector(".quiz-exists").insertAdjacentHTML('beforeend', quizzesCriados(q.nome, q.id));
            })
            
            document.querySelectorAll(".deletar").forEach((d) => {
                d.addEventListener("click", (e) => {
                    const id = d.getAttribute("data-id"); 
                    let quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
                    
                    quizzes = quizzes.filter(q => q.id != id);
                    
                    localStorage.setItem("quizzes", JSON.stringify(quizzes));
                    
                    alert("Quiz deletado com sucesso!");
            
                    d.parentElement.remove();
                });
            });
            
        });
    } else if (rota == "sobre") {
        carregarPagina("src/Pages/About/About.html", "app");
    }
};

function linkBotoes(){
    document.querySelectorAll(".link").forEach((evento) => {
        evento.addEventListener('click', () => {
            const rota = evento.getAttribute("data-rota");
            rotas(rota);
        });
    });
}
linkBotoes()



function adicionarEventosNosCards() {
    const elementos = document.querySelectorAll(".data-id");
    if (elementos.length === 0) {
        console.error("Nenhum elemento .data-id encontrado.");
    }

    elementos.forEach((evento) => {
        evento.addEventListener("click", (e) => {
            e.preventDefault();
            const idQuiz = evento.getAttribute("data-id");
            localStorage.setItem("quizz-selecionado-id", idQuiz);
            rotas("quizResponder");
        });
    });
}


