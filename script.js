let nav = document.querySelector(".menu");
let clicked = document.querySelector(".clicked");

let toggle = 1;

nav.addEventListener("click" , () => {
        nav.style.display = "none";
    clicked.style.display = "flex";
});

clicked.addEventListener("click" , () => {
    nav.style.display = "flex";
clicked.style.display = "none";
});