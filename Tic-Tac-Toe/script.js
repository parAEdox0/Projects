let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let winMessageContainer = document.querySelector(".messageContainer");
let winMessage = document.querySelector(".winner");

let turn = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn === 0) {
            box.innerText = "x";
            turn = 1;
        }
        else {
            box.innerText = "o";
            turn = 0;
        }
        box.disabled = true;

        checkWinner();
    });
})

function checkWinner() {
    for (let pattern of winPatterns) {

        let valueOne = boxes[pattern[0]].innerText;
        let valueTwo = boxes[pattern[1]].innerText;
        let valueThree = boxes[pattern[2]].innerText;
        
        if (valueOne != "" && valueTwo != "" && valueThree != "") {
            if (valueOne == valueTwo && valueTwo == valueThree) {
                console.log(`Winner is ${valueOne}`)
                stopGame(valueOne);
            }  
        }

    }
   
}

function stopGame(winner) {
    for (let box of boxes) {
        box.disabled = true;
    }
    winMessageContainer.style.display = "flex";
    winMessage.innerText = `Player ${winner} wins`;
    winMessage.style.fontSize = "2rem";
    winMessage.style.fontWeight = "900";
}

function startGame() {
    for (let box of boxes) {
        box.disabled = false;
    }
    winMessageContainer.style.display = "none";
}

function resetGame() {
    for (let pattern of winPatterns) {
        boxes[pattern[0]].innerText = "";
        boxes[pattern[1]].innerText = "";
        boxes[pattern[2]].innerText = "";
    }
}

newGame.addEventListener("click", () => {
    startGame();
    resetGame();
});

reset.addEventListener("click", () => {
    startGame();
    resetGame();
});
