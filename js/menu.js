//Menu Mobile:
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sideMenu = document.getElementById("side-menu");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    sideMenu.classList.remove("show");
});


//Menu Desktop:
const todasAsCategorias = document.getElementById("todas-as-categorias");
const containerMenuHover = document.getElementById("container-menu-hover");

todasAsCategorias.addEventListener("mouseenter", () => {
    containerMenuHover.style.display = "flex";
    containerMenuHover.style.justifyContent = "space-between"
});

todasAsCategorias.addEventListener("mouseleave", () => {
    containerMenuHover.style.display = "none"
});


const departamento = document.getElementById("departamento");
const containerMenuDepartamento = document.getElementById("container-menu-departamento");

departamento.addEventListener("mouseenter", () => {
    containerMenuDepartamento.style.display = "flex";
    containerMenuDepartamento.style.justifyContent = "space-between";
});

departamento.addEventListener("mouseleave", () => {
    containerMenuDepartamento.style.display = "none";
});