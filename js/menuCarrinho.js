
import { catalogo, lerLocalStorage, savarLocalStorage } from "../js/ultilidades.js";


const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {}; //Se for vazio/nulo ele vai jogar oque estiver na direita,que nesse caso sera o objeto vazio


function incrementarQuantidadeProduto(idProduto) {


    idsProdutoCarrinhoComQuantidade[idProduto]++;
    savarLocalStorage('carrinho',idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(idProduto)

};

export function inicializarCarrinho(){
    const botaoIrParaCheckout = document.getElementById("finalizar-compra")
    botaoIrParaCheckout.addEventListener("click",irParaCheckout)
}

function decrementarQuantidadeProduto(idProduto) {

    if (idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
        
        removerDoCarrinho(idProduto);
        return;
    }

    idsProdutoCarrinhoComQuantidade[idProduto]--;
    savarLocalStorage('carrinho',idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    atualizarInformacaoQuantidade(idProduto)

};

function atualizarInformacaoQuantidade(idProduto) {

    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto]

}

function removerDoCarrinho(idProduto) {

    delete idsProdutoCarrinhoComQuantidade[idProduto];  // Apagar o campo da quantidade do produto 
    savarLocalStorage('carrinho',idsProdutoCarrinhoComQuantidade);
    atualizarPrecoCarrinho();
    renderizarProdutosCarrinho();

}


function desenharProdutoNoCarrinho(idProduto) {


    //Ache o rpoduto p em que o id dele seja igual ao da função
    const produto = catalogo.find((p) => p.id === idProduto) // Olhando se o id do meu produto no catalogo corresponde ao id produto parametro da minha função

    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");



    const elementoArticle = document.createElement("article")



    const cartaoProdutoCarrinho = `
 <!-- Card produtos carrinho -->
 <div class="card mb-3" style="max-width: 540px;">
     <div class="row g-0">
         <div class="col-md-4">
             <img src="../assets/${produto.Imagem}"
                 class="img-fluid "
                 alt="Carrinho ${produto.nome}">
         </div>
         <div class="col-md-8">
             <div class="card-body">
                 <div class = "flex">
                     <h5 class="card-title">${produto.nome}</h5>
                     <button type="button" id='remover-item-${produto.id}' class="btn-close"
                     aria-label="Close">
                     </button>
                 </div>
                
                 <p class="card-text">Tamanho: M</p>
                 <p class="card-text">R$${produto.preco}</p>
 
                 <div class="cardtxt">
                 <button type="button" class="btn bg-transparent" id='decrementar-produto-${produto.id}'>-</button>
                 <p class="txt" id='quantidade-${produto.id}'> ${idsProdutoCarrinhoComQuantidade[produto.id]} </p> 
                 <button type="button" class="btn bg-transparent " id='incrementar-produto-${produto.id}'>+</button>
                 </div>
             </div>
 
 
 </div>
 
         </div>
     </div>
 </div>
 
 `;

    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle); // appendChild adciona um produto filho ao pai.


    document.getElementById(`incrementar-produto-${produto.id}`).addEventListener("click", () => incrementarQuantidadeProduto(produto.id))


    document.getElementById(`decrementar-produto-${produto.id}`).addEventListener("click", () => decrementarQuantidadeProduto(produto.id))

    document.getElementById(`remover-item-${produto.id}`).addEventListener("click", () => removerDoCarrinho(produto.id))

}


export function renderizarProdutosCarrinho() {

    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");

    containerProdutosCarrinho.innerHTML = "";
    for (const idProduto in idsProdutoCarrinhoComQuantidade) {

        desenharProdutoNoCarrinho(idProduto)
    }

}


export function adicionarAoCarrinho(idProduto) {

    if (idProduto in idsProdutoCarrinhoComQuantidade) /* Testando se ja existe o produto no carrinho */ {
        incrementarQuantidadeProduto(idProduto);
        return; /* Se essa opção for verdadeira ele sai da função automaticamente  */
    }

    idsProdutoCarrinhoComQuantidade[idProduto] = 1

    savarLocalStorage('carrinho',idsProdutoCarrinhoComQuantidade);
    desenharProdutoNoCarrinho(idProduto);
    atualizarPrecoCarrinho();
    renderizarProdutosCarrinho();

}


export function atualizarPrecoCarrinho() {
    const precoCarrinho = document.getElementById("preco-total");
    let precoTotalCarrinho = 0;
    for (const idProdutoNoCarinho in idsProdutoCarrinhoComQuantidade) {
        precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarinho];
    }
    savarLocalStorage('precoTotalCarrinho', precoTotalCarrinho);
    precoCarrinho.innerText = `Total: R$${precoTotalCarrinho}`;
}



function irParaCheckout(){
//Pegando uma lista das chaves que o objeto tem e olhando se ela esta vazia
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
return;
    }
//indo para pagina
    window.location.href = window.location.origin + "/checkout.html"
}

