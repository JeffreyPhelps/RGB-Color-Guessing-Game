// Jeffrey Phelps 2018 RGB Color Guesser guessing game

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");

let colors = generateRandomColors(6);

let pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

for(let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        };
    });
};

function changeColors(color){
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    };
};

function pickColor(){
    let randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
};

function generateRandomColors(num){
    let arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
};

function randomColor(){
    let reds = Math.floor(Math.random() * 256);
    let greens = Math.floor(Math.random() * 256);
    let blues = Math.floor(Math.random() * 256);
    return "rgb(" + reds + ", " + greens + ", " + blues + ")";
};