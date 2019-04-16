var sounds = [
	new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
	new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
	new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
	new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
];
function playSound(id) {
	sounds[id].play();
}

var fields = document.querySelectorAll('.field');
var redButton = document.querySelector('#red')
var blueButton = document.querySelector('#blue')
var yellowButton = document.querySelector('#yellow')
var greenButton = document.querySelector('#green')
var startButton = document.querySelector('#start');
var resetButton = document.querySelector('#reset');

var activegame = false;
var game = [];
var userinput= [];
var currentStep = 0;
var timeout;

function createOrder(){
    for (i = 0; i < 3; i++){
        game.push(Math.floor(Math.random() * 3))
    }
}

function addtoOrder(){
    game.push(Math.floor(Math.random() * 3));
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

        fields[id].className = fields[id].className.replace(' active', ''); //switch the button to "active"
        //so it looks as though it has been pressed
        currentStep++;

        timeout = setTimeout(showSteps, 0.3 * 1000); // give time for transition to finish

    }, 0.6 * 1000);
}

function compareOrders(){
    var id = currentStep;
    if(game[currentStep] != userinput[currentStep]){
        window.alert("Game Over, Try Again!");
        reset();
    }
    else if(game[currentStep] == userinput[currentStep] && userinput.length == game.length){
        addtoOrder();
        timeout = setTimeout(showSteps, 0.6 * 1000);
    }
}

startButton.onclick = function(){
    this.disabled = true;
    var game = [];
    var userinput = [];
    createOrder();
    showSteps();
    activegame = true;
}

resetButton.onclick = reset();

function reset() {
	startButton.disabled = false;
	game = [];
	userinput = [];
	activegame = false;
	currentStep = 0;
	clearTimeout(timeout);
}

redButton.onclick = function(){
    if (activegame == true) {
        playSound(0);
        userinput.push(0);
        compareOrders();
    }
}

blueButton.onclick = function(){
    if (activegame == true) {
        playSound(1);
        userinput.push(1);
        compareOrders();
    }
}

yellowButton.onclick = function(){
    if (activegame == true) {
        playSound(2);
        userinput.push(2);
        compareOrders();
    }
}

greenButton.onclick = function(){
    if (activegame == true) {
        playSound(3);
        userinput.push(3);
        compareOrders();
    }
}