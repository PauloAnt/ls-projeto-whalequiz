(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}})();async function m(r,e){try{const t=await(await fetch(r)).text();document.getElementById(e).innerHTML=t}catch(a){console.log(`Ocorreu um erro ao carregar página ${a.message}`)}}function S(){return`
   
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
    
    `}function b(){return`
    <footer>
      <p class="margem">WhaleQuiz</p>
      <article class="conteiner2">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
      </article>
      <p class="margem"> &copy; IFPB | Paulo Antônio - Jonas Gabriel - Victor Belfort</p>
    </footer>
    `}function E(){return`
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
    
    `}const A=[{id:1,nome:"Quiz de Conhecimentos Gerais",quiz:[{questoes:"Qual é o maior país em extensão territorial?",opcoes:["Brasil","China","Rússia","Estados Unidos"],correto:"Rússia"},{questoes:"Em que ano o homem pisou na Lua pela primeira vez?",opcoes:["1959","1969","1972","1980"],correto:"1969"},{questoes:"Qual é o rio mais extenso do mundo?",opcoes:["Rio Nilo","Rio Amazonas","Rio Yangtzé","Rio Mississipi"],correto:"Rio Amazonas"},{questoes:"Qual é a capital da Austrália?",opcoes:["Sydney","Melbourne","Canberra","Brisbane"],correto:"Canberra"},{questoes:"Quantos continentes existem no planeta Terra?",opcoes:["5","6","7","8"],correto:"7"}],criador:"pauloant@example.com",tema:"conhecimentos_gerais",descricao:"Teste seus conhecimentos gerais com perguntas sobre geografia, história, e fatos curiosos do mundo!"},{id:2,nome:"Quiz Educativo",quiz:[{questoes:"Quem é o autor de “Dom Casmurro”?",opcoes:["Graciliano Ramos","Machado de Assis","Monteiro Lobato","Carlos Drummond de Andrade"],correto:"Machado de Assis"},{questoes:"Qual é o símbolo químico do elemento Oxigênio?",opcoes:["O","Ox","Og","Oxg"],correto:"O"},{questoes:"Quanto é 7 x 8?",opcoes:["48","54","56","49"],correto:"56"},{questoes:"Qual é o maior planeta do sistema solar?",opcoes:["Terra","Júpiter","Saturno","Marte"],correto:"Júpiter"},{questoes:"O que significa a sigla ONU?",opcoes:["Organização das Nações Unidas","Organização Nacional Unificada","Ordem Nacional Unida","Organização Nova Universal"],correto:"Organização das Nações Unidas"}],criador:"pauloant@example.com",tema:"educativo",descricao:"Um quiz educativo para testar seus conhecimentos sobre literatura, ciências, matemática e mais!"},{id:3,nome:"Quiz Musical",quiz:[{questoes:"Quem é conhecido como o 'Rei do Pop'?",opcoes:["Elvis Presley","Michael Jackson","Freddie Mercury","Prince"],correto:"Michael Jackson"},{questoes:"Qual banda britânica lançou o álbum 'Abbey Road'?",opcoes:["The Rolling Stones","The Beatles","Pink Floyd","Queen"],correto:"The Beatles"},{questoes:"Quantas cordas possui um violão tradicional?",opcoes:["4","5","6","7"],correto:"6"},{questoes:"Qual desses é um estilo musical brasileiro?",opcoes:["Salsa","Fado","Bossa Nova","Flamenco"],correto:"Bossa Nova"},{questoes:"Quem canta a música 'Rolling in the Deep'?",opcoes:["Beyoncé","Adele","Taylor Swift","Lady Gaga"],correto:"Adele"}],criador:"victorbelfort@example.com",tema:"musica",descricao:"Explore o universo musical com perguntas sobre artistas, álbuns icônicos e curiosidades!"},{id:4,nome:"Quiz de Tecnologia",quiz:[{questoes:"Quem é considerado o pai da computação?",opcoes:["Alan Turing","Charles Babbage","Steve Jobs","Bill Gates"],correto:"Alan Turing"},{questoes:"Qual linguagem de programação é mais usada para desenvolvimento web?",opcoes:["Python","Java","JavaScript","C++"],correto:"JavaScript"},{questoes:"O que significa a sigla HTML?",opcoes:["HyperText Markup Language","HighText Machine Language","Hyper Transfer Markup Language","Home Tool Markup Language"],correto:"HyperText Markup Language"},{questoes:"Qual empresa desenvolveu o sistema operacional Android?",opcoes:["Apple","Microsoft","Google","Samsung"],correto:"Google"},{questoes:"O que significa a sigla CPU?",opcoes:["Central Processing Unit","Computer Personal Unit","Central Personal Unit","Computer Processing Unit"],correto:"Central Processing Unit"}],criador:"jonas@example.com",tema:"tecnologia",descricao:"Teste seus conhecimentos em tecnologia com perguntas sobre programação, hardware e software!"},{id:5,nome:"Quiz de Cinema",quiz:[{questoes:"Quem dirigiu o filme 'Titanic'?",opcoes:["Steven Spielberg","James Cameron","Christopher Nolan","Quentin Tarantino"],correto:"James Cameron"},{questoes:"Qual filme ganhou o Oscar de Melhor Filme em 2020?",opcoes:["1917","Coringa","Parasita","Era Uma Vez em... Hollywood"],correto:"Parasita"},{questoes:"Quem interpretou o personagem 'Homem de Ferro' nos filmes da Marvel?",opcoes:["Chris Evans","Chris Hemsworth","Robert Downey Jr.","Mark Ruffalo"],correto:"Robert Downey Jr."},{questoes:"Qual filme tem a famosa frase 'Que a Força esteja com você'?",opcoes:["Star Trek","O Senhor dos Anéis","Harry Potter","Star Wars"],correto:"Star Wars"},{questoes:"Qual é o nome do personagem principal em 'O Rei Leão'?",opcoes:["Scar","Mufasa","Simba","Timon"],correto:"Simba"}],criador:"jonas@example.com",tema:"cinema",descricao:"Teste seus conhecimentos sobre o mundo do cinema com perguntas sobre diretores, atores e filmes icônicos!"}],L=[{id:1,nome:"pauloant",email:"pauloant@example.com",senha:"senha123",pontuacao:0},{id:2,nome:"jonasgabriel",email:"jonasgabriel@example.com",senha:"senha456",pontuacao:0},{id:3,nome:"victorbelfort",email:"victorbelfort@example.com",senha:"senha789",pontuacao:0}];function h(r,e,a){return`
        <a href="#" class="link data-id" data-rota="quizResponder" data-id="${a}">             
            <div class="card">
                <img class="card-img" src="src/Images/CardImage.png" alt="imagem do card">
                <dl>
                    <dt class="card-name font-bold font-xl">${r}</dt>
                    <br>
                    <dd>${e}</dd>
                </dl>
            </div>
        </a>
    `}function Q(r,e){return`<div class="quiz-criados">
        <div>
            <p>${r}</p>
        </div>
        
        <div>
            <button class="bg-blue-500 text-white p-2 rounded cursor-not-allowed opacity-50" disable>Editar</button>
            <button class="bg-red-600 deletar" data-id="${e}">Deletar</button>
        </div>
    </div>`}function O(r,e,a,t){let o="";return e.forEach(i=>{o+=`
            <div class="option">
                <input type="radio" class="opcao" name="pergunta-${t}" value="${i}" ${i===a?'data-correct="true"':'data-correct="false"'}>
                <label>${i}</label>
            </div>

        `}),`
        <div class="quiz-perguntas" id="pergunta-${t}">
            <h2>${r}</h2>
            ${o}
        </div>
    `}function q(r,e){const a=document.querySelector(r);a.textContent=e,a.style.color="red",a.style.textAlign="center"}function C(){document.querySelectorAll(".input p").forEach(r=>r.textContent="")}function x(r,e,a){const t=r.value.trim(),o=e.value.trim(),i=a.value;let s=JSON.parse(localStorage.getItem("users"))||[];const u={id:s.length+1,nome:t,email:o,senha:i,pontuacao:0};s.push(u),localStorage.setItem("users",JSON.stringify(s))}document.getElementById("header").innerHTML=S();document.getElementById("footer").innerHTML=b();localStorage.setItem("users",JSON.stringify(L));localStorage.setItem("quizzes",JSON.stringify(A));localStorage.removeItem("sessaoAtual");m("./src/Pages/Home/home.html","app").then(()=>{let r=localStorage.getItem("quizzes");r=JSON.parse(r),r.forEach(e=>{let a=h(e.nome,e.descricao,e.id);const t=document.getElementById("all-quizzes");t?t.insertAdjacentHTML("beforeend",a):console.error("Elemento 'all-quizzes' não encontrado.")}),r.slice(0,4).forEach(e=>{let a=h(e.nome,e.descricao,e.id);const t=document.getElementById("quizzes-populares");t?t.insertAdjacentHTML("beforeend",a):console.error("Elemento 'all-quizzes' não encontrado.")}),y()});const g=r=>{r=="registro"?m("./src/Pages/Registro/Registro.html","app").then(()=>{const e=document.querySelector("#registrar"),a=document.querySelector("#usuario"),t=document.querySelector("#email"),o=document.querySelector("#senha");e?e.addEventListener("click",i=>{i.preventDefault(),C();let s=!0;a.value.trim()||(q("msg-usuario","Nome do usuário não pode ser vazio."),s=!1),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.value.trim())||(q("msg-email","Email inválido!"),s=!1),o.value.length<8&&(q("msg-senha","A senha deve ter pelo menos 8 caracteres."),s=!1),s&&(x(a,t,o),alert("Registrado com sucesso!"),g("login"))}):console.error("Botão de registro não encontrado.")}):r=="home"?m("./src/Pages/Home/home.html","app").then(()=>{z();let e=localStorage.getItem("quizzes");e=JSON.parse(e),e.forEach(a=>{const t=document.getElementById("all-quizzes");t?t.insertAdjacentHTML("beforeend",h(a.nome,a.descricao,a.id)):console.error("Elemento 'all-quizzes' não encontrado.")}),e.slice(0,4).forEach(a=>{let t=h(a.nome,a.descricao,a.id);const o=document.getElementById("quizzes-populares");o?o.insertAdjacentHTML("beforeend",t):console.error("Elemento 'all-quizzes' não encontrado.")}),y()}):r=="login"?m("./src/Pages/Login/Login.html","app").then(e=>{const a=document.querySelector("#usuario"),t=document.querySelector("#senha");document.querySelector("#entrar").addEventListener("click",i=>{i.preventDefault();const s=document.querySelector("#msg-login"),n=a.value.trim(),c=t.value,p=JSON.parse(localStorage.getItem("users")).find(l=>l.nome===n&&l.senha===c);p?(localStorage.setItem("sessaoAtual",JSON.stringify(p)),alert("Logado com sucesso!"),document.getElementById("header").innerHTML=E(),z(),g("home")):(s.textContent="Usuário ou senha inválidos.",s.style.color="red",s.style.textAlign="center")})}):r==="quizResponder"?m("./src/Pages/QuizResponder/QuizResponder.html","app").then(()=>{const e=localStorage.getItem("quizz-selecionado-id"),t=JSON.parse(localStorage.getItem("quizzes")).find(s=>s.id==e);if(t){document.querySelector(".quiz-responder-text h1").textContent=t.nome;const s=document.getElementById("formulario-quizzes");t.quiz.forEach(n=>{s.insertAdjacentHTML("beforeend",O(n.questoes,n.opcoes,n.correto))})}else console.error("Quiz não encontrado.");document.getElementById("verificar-respostas").addEventListener("click",i),document.addEventListener("click",function(s){const n=s.target.closest(".option");n&&o(n)});function o(s){s.parentElement.querySelectorAll(".option").forEach(u=>u.classList.remove("selecionado")),s.classList.add("selecionado");const c=s.querySelector("input");c&&(c.checked=!0)}function i(){document.querySelectorAll(".quiz-perguntas").forEach(s=>{const n=s.querySelectorAll(".option");let c=0,u=1;n.forEach(d=>{const f=d.querySelector("input"),v=f.getAttribute("data-correct")==="true";u+=1,f.checked&&(v?(d.classList.add("correto"),c+=1):d.classList.add("errado"))});const p=`Você acertou  ${c} / ${u}. Tente novamente mais tarde  -_-`,l=document.querySelector("#resultado-Quizzes");l.innerHTML=p})}}):r=="quizCriar"?m("./src/Pages/QuizCriar/QuizCriar.html","app").then(()=>{document.getElementById("add-question").addEventListener("click",()=>{document.getElementById("perguntas").insertAdjacentHTML("beforeend",`
                    <input type="text" placeholder="Digite sua pergunta" class="border-cinza questao"/>
                    <input type="text" placeholder="Coloque a opção correta aqui" class="border-verde correto"/>
                    <input type="text" placeholder="Coloque a opção incorreta aqui" class="border-vermelho incorreto"/>
                    <input type="text" placeholder="Coloque a opção incorreta aqui" class="border-vermelho incorreto"/>
                    <input type="text" placeholder="Coloque a opção incorreta aqui" class="border-vermelho incorreto"/>
                `)}),document.querySelector("form").addEventListener("submit",e=>{e.preventDefault();let a=[];const t=document.querySelector(".nome").value,o=document.querySelector(".tema").value,i=document.querySelector(".descricao").value,s=Array.from(document.querySelectorAll(".questao")).map(l=>l.value),n=Array.from(document.querySelectorAll(".correto")).map(l=>l.value),c=Array.from(document.querySelectorAll(".incorreto")).map(l=>l.value);s.forEach((l,d)=>{const f=[...c.slice(d*3,(d+1)*3),n[d]];a.push({questoes:l,opcoes:f,correto:n[d]})});const u=JSON.parse(localStorage.getItem("quizzes")||"[]"),p={id:u.length+1,nome:t,quiz:a,criador:"teste",tema:o,descricao:i};u.push(p),localStorage.setItem("quizzes",JSON.stringify(u)),alert("Quiz criado com sucesso!"),g("home")})}):r=="perfil"?m("./src/Pages/Perfil/Perfil.html","app").then(()=>{const e=JSON.parse(localStorage.getItem("sessaoAtual"));document.querySelector(".usuario").value=e.nome,document.querySelector(".email").value=e.email;const a=JSON.parse(localStorage.getItem("quizzes")||"[]"),t=[];a.forEach(o=>{o.criador===e.email&&t.push(o)}),t.forEach(o=>{document.querySelector(".quiz-exists").insertAdjacentHTML("beforeend",Q(o.nome,o.id))}),document.querySelectorAll(".deletar").forEach(o=>{o.addEventListener("click",i=>{const s=o.getAttribute("data-id");let n=JSON.parse(localStorage.getItem("quizzes"))||[];n=n.filter(c=>c.id!=s),localStorage.setItem("quizzes",JSON.stringify(n)),alert("Quiz deletado com sucesso!"),o.parentElement.remove()})})}):r=="sobre"&&m("./src/Pages/About/About.html","app")};function z(){document.querySelectorAll(".link").forEach(r=>{r.addEventListener("click",()=>{const e=r.getAttribute("data-rota");g(e)})})}z();function y(){const r=document.querySelectorAll(".data-id");r.length===0&&console.error("Nenhum elemento .data-id encontrado."),r.forEach(e=>{e.addEventListener("click",a=>{a.preventDefault();const t=e.getAttribute("data-id");localStorage.setItem("quizz-selecionado-id",t),g("quizResponder")})})}
