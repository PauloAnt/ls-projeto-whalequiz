const inputUsuario = document.querySelector("#usuario"); 
const inputSenha = document.querySelector("#senha"); 
const entrar = document.querySelector("#entrar"); 

function SenhaErro() {
    const erroLogin = document.querySelector("#msg-login")
    erroLogin.textContent = "Usuário ou senha inválidos."
    erroLogin.style.color = "red"
    erroLogin.style.textAlign = "center"
}

function validaLogin(e) {
  e.preventDefault(); 

  const usuarioProcurado = inputUsuario.value.trim();
  const senha = inputSenha.value;

  const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados"));

  const usuarioValido = usuariosRegistrados.find(
    (usuario) =>
      usuario.usuario === usuarioProcurado && usuario.senha === senha
  );

  if (usuarioValido) {
    
    window.location.href = "../Home/home.html";

  } else {
    SenhaErro()
  }
}

entrar.addEventListener("click", validaLogin);