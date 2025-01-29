export default function validarLogin(e) {
    e.preventDefault();

    const erroLogin = document.querySelector("#msg-login");
    const usuarioProcurado = inputUsuario.value.trim();
    const senha = inputSenha.value;
    const usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados"));

    const usuarioValido = usuariosRegistrados?.find(
        (usuario) => usuario.usuario === usuarioProcurado && usuario.senha === senha
    );

    if (usuarioValido) {
        localStorage.setItem("sessaoAtual", JSON.stringify(usuarioValido));
        console.log(localStorage.getItem("sessaoAtual"));
    } else {
        erroLogin.textContent = "Usuário ou senha inválidos.";
        erroLogin.style.color = "red";
        erroLogin.style.textAlign = "center";
    }
}

