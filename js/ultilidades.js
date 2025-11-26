

export const catalogo = [

    { //Produto 1
        id: "1",
        nome: "Blusa Jesus na ceia",
        marca: "Semeador Store",
        preco: 270,
        Imagem: "produto1.png",
        feminino: false
    },


    { //Produto 2
        id: "2",
        nome: "Blusa God Is Good",
        marca: "Semeador Store",
        preco: 279,
        Imagem: "produto2.png",
        feminino: false
    },

    { //Produto 3
        id: "3",
        nome: "Moletom Salmo 23",
        marca: "Semeador Store",
        preco: 289,
        Imagem: "produto3.png",
        feminino: true
    },
    { //Produto 4
        id: "4",
        nome: "Moletom Jesus",
        marca: "Semeador Store",
        preco: 270,
        Imagem: "produto4.png",
        feminino: false
    },

    { //Produto 5
        id: "5",
        nome: "Moletom Primeiro o Reino",
        marca: "Semeador Store",
        preco: 280,
        Imagem: "produto5.png",
        feminino: false
    },


    { //Produto 6
        id: "6",
        nome: "Camiseta 70x7",
        marca: "Semeador Store",
        preco: 75,
        Imagem: "produto6.png",
        feminino: true
    },


    { //Produto 7
        id: "7",
        nome: "Camiseta Mãe",
        marca: "Semeador Store",
        preco: 85,
        Imagem: "produto7.png",
        feminino: true
    },


    { //Produto 8(obj)
        id: "8",
        nome: "Camiseta as 99 ovelhas",
        marca: "Semeador Store",
        preco: 280,
        Imagem: "produto8.png",
        feminino: true
    },

    { //Produto 9(obj)
        id: "9",
        nome: "Moletom Blessed",
        marca: "Semeador Store",
        preco: 179,
        Imagem: "produto9.png",
        feminino: false
    }


];
// Salvando os valores do carrinho dentro de um "banco de dados" do navegador chamado (LocalSorage)
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
 <!-- Card produtos carrinho -->
 <div class="card mb-3" style="max-width: 540px;">
     <div class="row g-0">
         <div class="col-md-4">
             <img src="./assets/${produto.Imagem}"
                 class="img-fluid img-thumbnail"
                 alt="Carrinho ${produto.nome}">
         </div>
         <div class="col-md-8">
             <div class="card-body ">
                 <div class = "flex">
                     <h5 class="card-title">${produto.nome}</h5>
                     
                 </div>
                
                 <p class="card-text">Tamanho: M</p>
                 <p class="card-text">R$${produto.preco}</p>
 
                 <div class="cardtxt">
              
                 <p class="txt txt5" id='quantidade-${produto.id}'> <div>Quantidade:</div> 
                 <div>${quantidadeProduto}</div> </p> 
                                   
                 </div>
             </div>
 
 
 </div>
 
         </div>
     </div>
 </div>
 
 `;

    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle); // appendChild adciona um produto filho ao pai.

}

