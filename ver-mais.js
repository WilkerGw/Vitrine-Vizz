// Seleciona todos os botões "Ver mais"
const botoesVerMais = document.querySelectorAll('.ver-mais');

// Itera sobre cada botão para adicionar um evento de clique
botoesVerMais.forEach(botao => {
    botao.addEventListener('click', function () {
        const descricao = this.parentElement; // Pega o elemento pai do botão (o <p>)
        const conteudoExtra = descricao.querySelector('.conteudo-extra'); // Seleciona o texto escondido
        
        if (conteudoExtra.style.display === 'none' || !conteudoExtra.style.display) {
            conteudoExtra.style.display = 'block'; // Exibe o conteúdo extra
            this.textContent = 'Ver menos'; // Altera o texto do botão
        } else {
            conteudoExtra.style.display = 'none'; // Esconde o conteúdo extra
            this.textContent = '...Ver mais'; // Restaura o texto do botão
        }
    });
});


