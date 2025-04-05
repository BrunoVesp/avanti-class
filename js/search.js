document.addEventListener("DOMContentLoaded", function () {
    const inputDesktop = document.getElementById("input-busca-desktop");
    const btnDesktop = document.getElementById("btn-busca-desktop");

    const inputMobile = document.getElementById("input-busca-mobile");
    const btnMobile = document.getElementById("btn-busca-mobile");

    const resultadoBusca = document.getElementById("resultado-busca");

    function adicionarEventoBusca(botao, input) {
        if (botao && input && resultadoBusca) {
            botao.addEventListener("click", function (e) {
                e.preventDefault();
                resultadoBusca.innerText = `Você buscou por: ${input.value}`
            });
        }
    }

    adicionarEventoBusca(btnDesktop, inputDesktop);
    adicionarEventoBusca(btnMobile, inputMobile);
});
