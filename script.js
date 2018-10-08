// Jeffrey Phelps 2018 RGB Color Guesser guessing game

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetBtn = document.querySelector("#resetBtn");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");

let numberOfSquares = 6;

let colors = generateRandomColors(numberOfSquares);

let pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

for(let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetBtn.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
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


// BUTTONS

resetBtn.addEventListener("click", function(){
     colors = generateRandomColors(numberOfSquares);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     resetBtn.textContent = "New Colors";
     h1.style.backgroundColor = "#232323";
     for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    };
});

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected")
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
           squares[i].style.backgroundColor = colors[i]; 
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});



