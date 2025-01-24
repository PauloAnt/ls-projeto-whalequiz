export default async function carregarPagina(caminho, elemento){
    try {
        const resposta = await fetch(caminho) 

        const conteudo = await resposta.text()

        document.getElementById(elemento).innerHTML = conteudo
    } catch (error) {
        console.log(
            `Ocorreu um erro ao carregar página ${error.message}`
        );

    }
}