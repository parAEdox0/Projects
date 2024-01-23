let heart = document.querySelector("#heart");
let postLike = document.querySelector("#postLike");
let banner = document.querySelector(".mid");
let midLike = document.querySelector("#midLike");


banner.addEventListener("dblclick", () => {
        midLike.style.display = "block";
        midLike.style.transform = "scale(1)";
        heart.style.display = "none";
        postLike.style.display = "block";
        setTimeout(() => {
            midLike.style.transform = "scale(5)";
            midLike.style.display = "none";
        },500)
})

heart.addEventListener("click", () =>{
    heart.style.display = "none";
    postLike.style.display = "block";
});

postLike.addEventListener("click", () => {
    postLike.style.display = "none";
    heart.style.display = "block";

})