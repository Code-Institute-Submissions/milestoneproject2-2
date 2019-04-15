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


startButton.onclick = function(){
    this.disabled = true;
    var game = [];
    var userinput = [];
    createOrder();
    showSteps();
    activegame = true;
}

resetButton.onclick = reset;

function reset() {
	startButton.disabled = false;
	game = [];
	activegame = false;
	currentStep = 0;
	clearTimeout(timeout);
}
