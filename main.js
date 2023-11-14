
import { renderizarCatalogo } from "./cartaoProduto.js";
import { renderizarProdutosCarrinho, atualizarPrecoCarrinho, inicializarCarrinho} from "./menuCarrinho.js";
import { inicializarFiltros } from "./filtrosCatalogo.js";  







renderizarCatalogo();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
inicializarCarrinho();

