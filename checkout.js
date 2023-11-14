import { desenharProdutoCarrinhoSimples , lerLocalStorage, apagarDoLocalStorage ,savarLocalStorage,catalogo} from "./ultilidades";


let precoProd = lerLocalStorage('precoTotalCarrinho') ?? 0; // Inicialize com 0 se não houver preço.

function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
   
    // Calcular o preço total do carrinho
    let precoTotalCarrinho = 0;
    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        const produto = catalogo.find((p) => p.id === idProduto);
        precoTotalCarrinho += produto.preco * idsProdutoCarrinhoComQuantidade[idProduto];
    }

    // Definir o preço total no elemento com o ID "preco-total"
    document.getElementById("preco-total").innerHTML = `Total: R$${precoTotalCarrinho}`;

    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto]);
    }
}


function finalizarCompra(evento){
evento.preventDefault();
const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {}; 
if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){

    return;
}

const dataAtual = new Date();
const pedidoFeito = {
    dataPedido: dataAtual,
    pedido: idsProdutoCarrinhoComQuantidade,
    total : precoProd,
    
};
const historicoDePedidos = lerLocalStorage('historico') ?? [];

const historicoDePedidosAtualizado = [pedidoFeito,...historicoDePedidos];
savarLocalStorage('historico',historicoDePedidosAtualizado);

apagarDoLocalStorage("carrinho");

    window.location.href=window.location.origin + "/pedidos.html";


}

desenharProdutosCheckout();
document.addEventListener("submit",(evt) => finalizarCompra(evt));


