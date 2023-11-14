const catalogoProdutos = document.getElementById("container-produto");


function exibirTodos() {

    const produtosEscondidos =
        Array.from(catalogoProdutos.getElementsByClassName('visually-hidden'));
    // Array.from = Convertendo para um array/lista os nosso elementos

    for (const produto of produtosEscondidos) {
        produto.classList.remove('visually-hidden')
    }

}

function esconderMasculinos() {
    exibirTodos();
    const produtosMasculinos =
        Array.from(catalogoProdutos.getElementsByClassName('masculino'));
        

    for (const produto of produtosMasculinos) {

        produto.classList.add('visually-hidden') // Adicionando a classe hidden para fazer com qeu o objeto seja escondido
    }

}



function esconderFemininos() {
    exibirTodos();
    const produtosFemininos =
        Array.from(catalogoProdutos.getElementsByClassName('feminino'));

    for (const produto of produtosFemininos) {

        produto.classList.add('visually-hidden') // Adicionando a classe hidden para fazer com qeu o objeto seja escondido
    }
}

export function inicializarFiltros() {

    document.getElementById("exibir-femininos").addEventListener("click", esconderMasculinos);

    document.getElementById("exibir-todos").addEventListener("click", exibirTodos);

    document.getElementById("exibir-masculinos").addEventListener("click", esconderFemininos)

}