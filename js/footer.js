function ativarFooterLinksMobile() {
    const footerLinks = document.querySelectorAll(".footer-links");

    // Se for menor que 800px
    if (window.innerWidth < 800) {
        footerLinks.forEach(footerLink => {
            const lista = footerLink.querySelector(".lista");
            const imgAtivo = footerLink.querySelector(".ativo");
            const imgDesativo = footerLink.querySelector(".desativo");

            // Garante que só adiciona o listener uma vez
            if (!footerLink.dataset.listenerAdicionado) {
                let isAtivo = false;

                if (lista && imgAtivo && imgDesativo) {
                    lista.style.display = "none";
                    imgAtivo.style.display = "none";

                    footerLink.addEventListener("click", function () {
                        isAtivo = !isAtivo;

                        footerLinks.forEach(otherFooterLink => {
                            if (otherFooterLink !== footerLink) {
                                const otherLista = otherFooterLink.querySelector(".lista");
                                const otherImgAtivo = otherFooterLink.querySelector(".ativo");
                                const otherImgDesativo = otherFooterLink.querySelector(".desativo");

                                if (otherLista && otherImgAtivo && otherImgDesativo) {
                                    otherLista.style.display = "none";
                                    otherImgAtivo.style.display = "none";
                                    otherImgDesativo.style.display = "inline";
                                }
                            }
                        });

                        if (isAtivo) {
                            lista.style.display = "block";
                            imgAtivo.style.display = "inline";
                            imgDesativo.style.display = "none";
                        } else {
                            lista.style.display = "none";
                            imgAtivo.style.display = "none";
                            imgDesativo.style.display = "inline";
                        }
                    });

                    // Marca que o listener já foi adicionado
                    footerLink.dataset.listenerAdicionado = "true";
                }
            }
        });
    } else {
        // Em telas grandes, garante que a lista fique visível
        footerLinks.forEach(footerLink => {
            const lista = footerLink.querySelector(".lista");
            const imgAtivo = footerLink.querySelector(".ativo");
            const imgDesativo = footerLink.querySelector(".desativo");

            if (lista && imgAtivo && imgDesativo) {
                lista.style.display = "block";
                imgAtivo.style.display = "none";
                imgDesativo.style.display = "none";
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", ativarFooterLinksMobile);
window.addEventListener("resize", ativarFooterLinksMobile);