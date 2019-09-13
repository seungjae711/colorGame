var difficulty = 6;
var colors = generateRandomColors(difficulty);
var squares = document.querySelectorAll(".square");
var targetRGB = document.querySelector("#colorDisplay")
var pickedColor = seletColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");


easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected")
    hardButton.classList.remove("selected")
    difficulty = 3;
    reset();
    for (var i = 3; i <6; i++) {
        squares[i].style.display = "none"
    }
});

hardButton.addEventListener("click", function() {
    easyButton.classList.remove("selected")
    hardButton.classList.add("selected")
    difficulty = 6;
    reset();
    for (var i = 3; i <6; i++) {
        squares[i].style.display = "block"
    }
})

resetButton.addEventListener("click", function() {
    reset();
});

function reset() {
    // get new random colors
    colors = generateRandomColors(difficulty);
    // select new target color
    pickedColor = seletColor();
    // display new target color
    targetRGB.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        squares[i].style.backgroundColor = colors[i];    
    }
    h1.style.background = "steelblue";
}


targetRGB.textContent = pickedColor

for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        var selectedColor = this.style.backgroundColor;
        //grab color of clicked square
        if(selectedColor === pickedColor) {
            ChangeAllColor(selectedColor);
            messageDisplay.textContent = "Correct!";
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play again?"
        }else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again!";
        }
    });
}


function ChangeAllColor(color) {
    for (var i= 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color
    }
}

function seletColor() {
    indexColor = Math.floor(Math.random() * colors.length);
    returnColor = colors[indexColor];
    return returnColor;
}

function generateRandomColors(num) {
    // make an array
    var arr = [];

    // reapeat num times
    for (var i = 0; i <num; i++) {
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor() {
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 -255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 -255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}