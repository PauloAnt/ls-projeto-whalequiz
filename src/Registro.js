const inputUsuario = document.querySelector("#usuario");
const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#senha");
const inputRegistrar = document.querySelector("#registrar");

function UsuarioErro() {
    const erroUsuario = document.querySelector("#msg-usuario")
    erroUsuario.textContent = "Nome do usuário não pode ser vazio."
    erroUsuario.style.color = "red"
}
function EmailErro() {
    const erroEmail = document.querySelector("#msg-email");
    erroEmail.textContent = "Email inválido!";
    erroEmail.style.color = "red"
}

function SenhaErro() {
    const erroSenha = document.querySelector("#msg-senha")
    erroSenha.textContent = "A senha deve ter pelo menos 8 caracteres."
    erroSenha.style.color = "red"
}

function limpaErros() {
  document.querySelectorAll(".input p").forEach((msg) => (msg.textContent = ""));
}


function validaFormulario(e) {
  e.preventDefault(); 

  limpaErros(); 

  let formValido = true; 

  if (inputUsuario.value.trim() === "") {
    UsuarioErro();
    formValido = false;
  }

  if (!inputEmail.value.trim().includes("@") || inputEmail.value.trim().includes(" ")) {
    EmailErro();
    formValido = false;
  }

  if (inputSenha.value.length < 8) {
    SenhaErro();
    formValido = false;
  }

  if (formValido) {
    salvarDados();
  }
}


function salvarDados() {
    const usuario = inputUsuario.value.trim();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value;
  
    const perfil = {usuario, email, senha};
  
    let usuarios = JSON.parse(localStorage.getItem("usuariosRegistrados"));
  
    if (!usuarios) {
      usuarios = [];
    }

    usuarios.push(perfil);
    
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuarios));
  
    window.location.href = "../Login/Login.html";
  }

registrar.addEventListener("click", validaFormulario);