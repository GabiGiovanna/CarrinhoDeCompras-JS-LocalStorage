

export const catalogo = [

    { 
        id: "1",
        nome: "Blusa Jesus na ceia",
        marca: "Semeador Store",
        preco: 270,
        Imagem: "produto1.png",
        feminino: false
    },


    { 
        id: "2",
        nome: "Blusa God Is Good",
        marca: "Semeador Store",
        preco: 279,
        Imagem: "produto2.png",
        feminino: false
    },

    { 
        id: "3",
        nome: "Moletom Salmo 23",
        marca: "Semeador Store",
        preco: 289,
        Imagem: "produto3.png",
        feminino: true
    },
    { 
        id: "4",
        nome: "Moletom Jesus",
        marca: "Semeador Store",
        preco: 270,
        Imagem: "produto4.png",
        feminino: false
    },

    { 
        id: "5",
        nome: "Moletom Primeiro o Reino",
        marca: "Semeador Store",
        preco: 280,
        Imagem: "produto5.png",
        feminino: false
    },


    { 
        id: "6",
        nome: "Camiseta 70x7",
        marca: "Semeador Store",
        preco: 75,
        Imagem: "produto6.png",
        feminino: true
    },


    { 
        id: "7",
        nome: "Camiseta Mãe",
        marca: "Semeador Store",
        preco: 85,
        Imagem: "produto7.png",
        feminino: true
    },


    { 
        id: "8",
        nome: "Camiseta as 99 ovelhas",
        marca: "Semeador Store",
        preco: 280,
        Imagem: "produto8.png",
        feminino: true
    },

    { 
        id: "9",
        nome: "Moletom Blessed",
        marca: "Semeador Store",
        preco: 179,
        Imagem: "produto9.png",
        feminino: false
    }


];

export function savarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao)) //Ultilizando o JSON que é uma biblioteca de JS para passar de maneira "ludica" minha informação para texto pro navegador compreende-la 
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave)) //Passando para objeto o texto que esta salvo no LocalSotage
}

export function apagarDoLocalStorage(chave){

    localStorage.removeItem(chave)
}


 export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {


    //Ache o rpoduto p em que o id dele seja igual ao da função
    const produto = catalogo.find((p) => p.id === idProduto) // Olhando se o id do meu produto no catalogo corresponde ao id produto parametro da minha função

    const containerProdutosCarrinho = document.getElementById(idContainerHtml);



    const elementoArticle = document.createElement("article")



    const cartaoProdutoCarrinho = `
<article class="card-pedido mb-4">
    <div class="card card-pedido-inner">
        <div class="row g-0 align-items-center">

            <div class="col-md-4 text-center">
                <img src="./assets/${produto.Imagem}"
                     class="img-fluid img-thumbnail pedido-img"
                     alt="${produto.nome}">
            </div>

            <div class="col-md-8">
                <div class="card-body">

                    <h5 class="card-title">${produto.nome}</h5>

                    <p class="card-text">Tamanho: M</p>
                    <p class="card-text">R$${produto.preco}</p>

                    <p class="txt5">
                        <div>Quantidade:</div> 
                        <div>${quantidadeProduto}</div>
                    </p>

                </div>
            </div>

        </div>
    </div>
</article>
`;


    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle); // appendChild adciona um produto filho ao pai.

}

