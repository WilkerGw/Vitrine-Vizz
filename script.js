let btnFechar = document.querySelector('.imagem__fechar');
let btnMenu = document.querySelector('.imagem__menu');
let menuMobile = document.querySelector('.menu__mobile');

// Evento para o botão Fechar
btnFechar.addEventListener('click', function() {
    btnMenu.style.display = 'flex';        // Torna o botão Menu visível
    menuMobile.style.display = 'none';     // Esconde o menu Mobile
    btnFechar.style.display = 'none';      // Esconde o botão Fechar
});

// Evento para o botão Menu
btnMenu.addEventListener('click', function() {
    btnMenu.style.display = 'none';        // Esconde o botão Menu
    menuMobile.style.display = 'flex';     // Mostra o menu Mobile
    btnFechar.style.display = 'flex';      // Esconde o botão Fechar

});


