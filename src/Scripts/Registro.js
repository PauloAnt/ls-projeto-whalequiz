export function exibirErro(id, mensagem) {
    const erroElemento = document.querySelector(id);
    erroElemento.textContent = mensagem;
    erroElemento.style.color = "red";
    erroElemento.style.textAlign = "center";
}

export function limpaErros() {
    document.querySelectorAll(".input p").forEach((msg) => (msg.textContent = ""));
}

export function validarRegistro(e, inputUsuario, inputEmail, inputSenha) {
    e.preventDefault();

    limpaErros();

    let formValido = true;

    if (!inputUsuario.value.trim()) {
        exibirErro("#msg-usuario", "Nome do usuário não pode ser vazio.");
        formValido = false;
    }

    if (!inputEmail.value.trim().includes("@") || inputEmail.value.trim().includes(" ")) {
        exibirErro("#msg-email", "Email inválido!");
        formValido = false;
    }

    if (inputSenha.value.length < 8) {
        exibirErro("#msg-senha", "A senha deve ter pelo menos 8 caracteres.");
        formValido = false;
    }

    if (formValido) {
        salvarDados(inputUsuario, inputEmail, inputSenha);
    }
}

export function salvarDados(inputUsuario, inputEmail, inputSenha) {
    const nome = inputUsuario.value.trim();
    const email = inputEmail.value.trim();
    const senha = inputSenha.value;
  
    
  
    let usuarios = JSON.parse(localStorage.getItem("users")) || [];

    const id = usuarios.length + 1;
    const pontuacao = 0;
    const perfil = { id, nome, email, senha, pontuacao };
    usuarios.push(perfil);
    
    localStorage.setItem("users", JSON.stringify(usuarios));
}
