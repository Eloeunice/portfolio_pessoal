// Aguarda o carregamento completo da página antes de executar o código
document.addEventListener("DOMContentLoaded", function () {

    const linksMenu = document.querySelectorAll("nav ul li a");

    linksMenu.forEach(link => {
        link.addEventListener("mouseover", function () {
            link.style.color = "#FFD700"; // Dourado ao passar o mouse
        });

        link.addEventListener("mouseout", function () {
            link.style.color = "white"; // Voltar ao normal ao tirar o mouse
        });
    });

});
