const carrosseis = document.querySelectorAll(".carrossel");

carrosseis.forEach(carrossel => {
    const container = carrossel.querySelector(".container-itens-carrossel");
    const btnPrev = carrossel.querySelector(".botao-carrossel.anterior");
    const btnNext = carrossel.querySelector(".botao-carrossel.proximo");

    if (container && btnPrev && btnNext) {
        btnPrev.addEventListener("click", function (e) {
            e.preventDefault();
            container.scrollLeft -= container.offsetWidth;
        });

        btnNext.addEventListener("click", function (e) {
            e.preventDefault();
            container.scrollLeft += container.offsetWidth;
        });
    }
});