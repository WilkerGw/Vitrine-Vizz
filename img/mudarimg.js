// Seleciona todos os elementos de produtos na página
document.querySelectorAll('.produto').forEach(produto => {
    // Seleciona a imagem principal dentro de cada produto
    const imagemPrincipal = produto.querySelector('.imagem__principal__produto');
    // Seleciona todas as imagens secundárias dentro de cada produto
    const imagensSecundarias = produto.querySelectorAll('.imagem__secundaria');
  
    // Adiciona um evento de clique a cada imagem secundária
    imagensSecundarias.forEach(imagem => {
      imagem.addEventListener('click', () => {
        // Altera o src da imagem principal para o src da imagem clicada
        imagemPrincipal.src = imagem.src;
      });
    });
  });
  