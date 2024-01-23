let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".button");

let turn = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn === 0) {
            box.innerHTML = "x";
            turn = 1;
        }
        else {
            box.innerHTML = "o";
            turn = 0;
        }
        box.disabled = true;
    });
})

reset.addEventListener("click", () => {
    console.log("Fuck off")
    boxes.innerHTML = ""
});