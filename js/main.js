
import { renderizarCatalogo } from "../js/cartaoProduto.js";
import { renderizarProdutosCarrinho, atualizarPrecoCarrinho, inicializarCarrinho} from "../js/menuCarrinho.js";
import { inicializarFiltros } from "../js/filtrosCatalogo.js";  







renderizarCatalogo();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
inicializarCarrinho();

