document.addEventListener("DOMContentLoaded", () => {
    const imgDesk = document.querySelectorAll(".banner__img"); // Imagens desktop
    const imgMob = document.querySelectorAll(".banner__mobile"); // Imagens mobile
    let currentIndex = 0;
    let activeImages = imgDesk; // Por padrão, usa imagens desktop

    // Função para alternar entre as imagens
    const changeImage = () => {
        if (activeImages.length > 0) {
            activeImages[currentIndex].classList.remove("active"); // Remove a classe 'active' da imagem atual
            currentIndex = (currentIndex + 1) % activeImages.length; // Incrementa o índice circularmente
            activeImages[currentIndex].classList.add("active"); // Adiciona a classe 'active' à próxima imagem
        }
    };

    // Função para atualizar o conjunto de imagens com base no tamanho da tela
    const handleResize = () => {
        if (window.innerWidth < 768) {
            // Se a tela for menor que 768px, usa imagens mobile
            if (activeImages !== imgMob) {
                activeImages.forEach(img => img.classList.remove("active")); // Remove 'active' das imagens anteriores
                activeImages = imgMob; // Atualiza para imagens mobile
                currentIndex = 0; // Reinicia o índice
                if (activeImages.length > 0) activeImages[currentIndex].classList.add("active"); // Ativa a primeira imagem mobile
            }
        } else {
            // Se a tela for maior ou igual a 768px, usa imagens desktop
            if (activeImages !== imgDesk) {
                activeImages.forEach(img => img.classList.remove("active")); // Remove 'active' das imagens anteriores
                activeImages = imgDesk; // Atualiza para imagens desktop
                currentIndex = 0; // Reinicia o índice
                if (activeImages.length > 0) activeImages[currentIndex].classList.add("active"); // Ativa a primeira imagem desktop
            }
        }
    };

    // Inicializa o carrossel exibindo a primeira imagem
    if (activeImages.length > 0) {
        activeImages[currentIndex].classList.add("active");
    }

    // Alterna as imagens a cada 3 segundos
    setInterval(changeImage, 7000);

    // Adiciona o listener para mudanças de tamanho de tela
    window.addEventListener("resize", handleResize);

    // Chama a função ao carregar a página para ajustar a visibilidade inicial
    handleResize();
});
