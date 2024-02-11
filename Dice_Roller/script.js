const button = document.querySelector("#btn");
const result = document.querySelector(".result p");
const image = document.querySelector(".image div");

let value;

button.addEventListener("click", () => {
    value = (Math.round(Math.random() * (5)) + 1);
    console.log(value);
    result.innerText = `Value : ${value}`;
    image.innerHTML = `<img src = "./Assets/${value}.png">`;
});