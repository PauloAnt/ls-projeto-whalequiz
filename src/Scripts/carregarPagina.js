export default async function carregarPagina(caminho, elemento){
    try {
        const resposta = await fetch(caminho) 
        console.log(resposta)
        const conteudo = await resposta.text()
        console.log(conteudo)
        document.getElementById(elemento).innerHTML = conteudo
    } catch (error) {
        console.log(
            `Ocorreu um erro ao carregar página ${error.message}`
        );

    }
}