
import { desenharProdutoCarrinhoSimples, lerLocalStorage } from "./ultilidades";

let quantPedidos = 0;

function criarPedidoHistorico(pedidoComData) {
    
    const elementoPedido = `<p class='text-xl text-bold my-4' >
    Número do Pedido: ${quantPedidos}<br>
    Data e Hora: ${new Date(
        pedidoComData.dataPedido
    ).toLocaleDateString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
    })} <br> Preço Total: $${pedidoComData.total} </p>
    <p>  </p>
      <section class="cardPedido" id='container-pedidos-${pedidoComData.dataPedido
        }' class='bg-slate-300 p-3 rounded-md' ></section>
        
      `;
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML += elementoPedido;

    for (const idProduto in pedidoComData.pedido) {
        desenharProdutoCarrinhoSimples(
            idProduto,
            `container-pedidos-${pedidoComData.dataPedido}`,
            pedidoComData.pedido[idProduto]
        );
    }
    
}

function renderizarHistoricoPedidos() {
    
    const historico = lerLocalStorage('historico');
    for (const pedidoComData of historico) {
        quantPedidos++;
        criarPedidoHistorico(pedidoComData);   
    }
};

renderizarHistoricoPedidos();
