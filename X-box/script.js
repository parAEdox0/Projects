let menu = document.querySelector(".ham");
let cross = document.querySelector(".cross");
let dropDown = document.querySelector(".dropDown");
let dropUp = document.querySelector(".dropUp");
// let pause = document.querySelector(".pause");
// let play = document.querySelector(".play");

menu.addEventListener("click", () => {
    menu.style.display = "none";
    cross.style.display = "block";
});

cross.addEventListener("click", () => {
    menu.style.display = "block";
    cross.style.display = "none";
});

dropDown.addEventListener("click", () => {
    dropDown.style.display = "none";
    dropUp.style.display = "block";
});

dropUp.addEventListener("click", () => {
    dropDown.style.display = "block";
    dropUp.style.display = "none";
});

// pause.addEventListener("click", () => {
//     console.log("fu")
//     pause.style.display = "none";
//     play.style.display = "block";
// });

// play.addEventListener("click", () => {
//     pause.style.display = "block";
//     play.style.display = "none";
// });