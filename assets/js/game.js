var sounds = [
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
];

var fields = document.querySelectorAll('.field');
var redButton = document.querySelector('#red');
var blueButton = document.querySelector('#blue');
var yellowButton = document.querySelector('#yellow');
var greenButton = document.querySelector('#green');
var startButton = document.querySelector('#start');
var resetButton = document.querySelector('#reset');
var helpButton = document.querySelector('#help');

var activegame = false;
var game = [];
var userinput = [];
var currentStep = 0;
var timeout;

function createOrder() {
    for (i = 0; i < 3; i++) {
        game.push(Math.floor(Math.random() * 3))
    }
}

function addtoOrder() {
    game.push(Math.floor(Math.random() * 3));
}

function playSound(id) {
    sounds[id].play();
}

function showSteps() {
    userinput = [];
    if (currentStep > game.length - 1) {
        currentStep = 0
        return;
    }

    var id = game[currentStep];

    playSound(id);
    fields[id].className += ' active';

    setTimeout(function() {
        //switch the button to "active"
        //so it looks as though it has been pressed
        fields[id].className = fields[id].className.replace(' active', '');
        currentStep++;
        // give time for transition to finish
        timeout = setTimeout(showSteps, 300); 
    }, 600);
}

function compareOrders() {
    var id = currentStep;
    //check if the order is correct and see if it is the end of the sequence, if it is and the user input is correct so far, add one more onto the sequence and show it again from the start
    if (game[currentStep] == userinput[currentStep] && userinput.length == game.length) {
        currentStep = 0;
        addtoOrder();
        timeout = setTimeout(showSteps, 600);
        return;
    }
    else if (game[currentStep] != userinput[currentStep]) {
        window.alert("Game Over, Try Again!");
        reset();
    }
    currentStep++;
}

startButton.onclick = function() {
    this.disabled = true;
    var game = [];
    var userinput = [];
    currentStep = 0;
    createOrder();
    showSteps();
    activegame = true;
}

function reset() {
    startButton.disabled = false;
    game = [];
    userinput = [];
    activegame = false;
    currentStep = 0;
    clearTimeout(timeout);
}

resetButton.onclick = function() {
    reset();
}

helpButton.onclick = function() {
    window.alert("Press play and what the sequence that plays out, try to press the buttons in the same order! The game will get harder each time you match the sequence.");
}

redButton.onclick = function() {
    if (activegame == true) {
        playSound(0);
        userinput.push(0);
        compareOrders();
    }
}

blueButton.onclick = function() {
    if (activegame == true) {
        playSound(1);
        userinput.push(1);
        compareOrders();
    }
}

yellowButton.onclick = function() {
    if (activegame == true) {
        playSound(2);
        userinput.push(2);
        compareOrders();
    }
}

greenButton.onclick = function() {
    if (activegame == true) {
        playSound(3);
        userinput.push(3);
        compareOrders();
    }
}