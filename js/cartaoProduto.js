// "import" importando a função para que ela possa ser usada nesse codigo
import { catalogo } from "../js/ultilidades.js";
import { adicionarAoCarrinho } from "../js/menuCarrinho.js";
// "export" exportando a função para que ela possa ser usada e outro lugar

export function renderizarCatalogo() {
    //Pra cada produto do catalogo ele vai executar oque eu pedir
    // (of = "de")
    for (const produtoCatalogo of catalogo) {

        const cartaoProduto =
        /* No operador ternario se o feminino do produto for true então o produto reta uma classe chamda feminino senão ela tera uma classe chamada masculino */
        `   
        <div class= 'card card-product shadow-lg p-3 mb-5 bg-white rounded ${produtoCatalogo.feminino ? 'feminino' : 'masculino'} ;' style="width: 18rem;"> 
      <img  src="../assets/${produtoCatalogo.Imagem}" class="card-img-top hover-zoom" alt="Semeador Store">
      <div class="card-body">
        <h5 class="card-title">${produtoCatalogo.nome}</h5>
        <p class="card-text">${produtoCatalogo.marca}</p>
        <p class="card-text">R$${produtoCatalogo.preco}</p>
        <a href="#" id='adicionar-${produtoCatalogo.id}' class="btn btn-outline-dark">Comprar</a>
      </div>
    </div>`;

        document.getElementById("container-produto").innerHTML += cartaoProduto;

    }

    for (const produtoCatalogo of catalogo) {
       
        document.getElementById(`adicionar-${produtoCatalogo.id}`)
        .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id))  


    }


}


