import { desenharProdutoCarrinhoSimples, lerLocalStorage } from "./ultilidades.js";


function criarPedidoHistorico(pedidoComData, pedidoNumero) {


    const dataFormatada = new Date(pedidoComData.dataPedido).toLocaleDateString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const idContainer = `pedido-${pedidoComData.dataPedido}`;

    const estruturaHTML = `
        <div class="pedido-container">

            <div class="pedido-info">
                <h2 class="titulo-pedido">Pedido #${pedidoNumero}</h2>
                <p><strong>Data e Hora:</strong> ${dataFormatada}</p>
                <p class="preco-total-linha"><strong>Preço Total:</strong> 
                    <span id="preco-total-pedido">R$${pedidoComData.total}</span>
                </p>
            </div>

            <div id="${idContainer}" class="lista-itens"></div>

        </div>
    `;

    document.querySelector("main").innerHTML += estruturaHTML;

    // Desenha os produtos dentro do card do pedido
    for (const idProduto in pedidoComData.pedido) {
        desenharProdutoCarrinhoSimples(
            idProduto,
            idContainer,
            pedidoComData.pedido[idProduto]
        );
    }
}

function renderizarHistoricoPedidos() {
    let historico = lerLocalStorage("historico") || [];

    historico.sort((a, b) => b.dataPedido - a.dataPedido);

    let numero = historico.length;

    for (const pedido of historico) {
        criarPedidoHistorico(pedido, numero);
        numero--; 
    }
}


renderizarHistoricoPedidos();
