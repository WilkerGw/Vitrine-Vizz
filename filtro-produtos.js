// Função para filtrar produtos com base no modelo selecionado
function filtrarModelo(modelo) {
    const produtos = document.querySelectorAll('.produto'); // Seleciona todos os produtos

    produtos.forEach(produto => {
        if (modelo === 'todos') {
            produto.style.display = 'block'; // Exibe todos os produtos se o filtro for 'todos'
        } else {
            produto.style.display = produto.classList.contains(modelo) ? 'block' : 'none'; // Exibe apenas o modelo selecionado
        }
    });
}
