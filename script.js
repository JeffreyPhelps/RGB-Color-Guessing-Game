// Jeffrey Phelps 2018 RGB Color Guesser guessing game

let colors = [
    'rgb(255, 0, 0)', 
    'rgb(255, 255, 0)', 
    'rgb(0, 255, 0)', 
    'rgb(0, 255, 255)', 
    'rgb(0, 0, 255)', 
    'rgb(255, 0, 255)'
];

let pickedColor = colors[3];

const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(let i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
};

