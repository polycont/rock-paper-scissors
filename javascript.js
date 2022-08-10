/* 

TODOS

TODO: Create a play again button/function.
TODO: Add a money stack with appropriately-OSRS-colored text depending on how much there is. Subtract this.
When it reaches 0, you lose. Until then, you can keep playing. 
TODO: Let players make custom wagers?
TODO: Take player's name as input to greet them.

*/

// Declaring variables needed for the game's operation.
const dscim = document.getElementById('weapon1');
const bowfa = document.getElementById('weapon2');
const astaff = document.getElementById('weapon3');

const kills = document.getElementById('kills');
const deaths = document.getElementById('deaths');

const log = document.getElementById('results-box');

let playerSelection = '';
let computerSelection;

/* Score tracking. */
let playerScore = 0;
let computerScore = 0;

/* Create a function to calculate the computer's choice and return the value. */
function getComputerChoice() {
    let choiceCalc = Math.floor(Math.random() * 100);
    if (choiceCalc < 33) return 'weapon1';
    if (choiceCalc > 33 && choiceCalc < 66) return 'weapon2';
    if (choiceCalc > 66) return 'weapon3';
}

/* Compare player's choice to computer's and award a point (or a tie) based on which selection wins */
function playRPS() {
    
    if (playerScore == 10 && computerScore != 10) { 
        log.textContent = "No more opponents are willing to challenge your might! Rest and return another day."
        return;
    } else if (computerScore == 10 && playerScore != 10) {
        log.textContent = "You have no energy left to fight! Rest and return another day."
        return;
    }

    if (playerSelection === computerSelection) log.textContent = "Your weapons are too evenly matched! It's a tie.";

    if (playerSelection === 'weapon1' && computerSelection === 'weapon2') {
        ++playerScore;
        log.textContent = "You fell your foe with a vicious cut to the chest, easily piercing his dragonhide armor!";
    } else if (playerSelection === 'weapon1' && computerSelection === 'weapon3') {
        ++computerScore;
        log.textContent = "Rats! The enemy mage's icy magic freezes you in place while he goes for the kill.";
    } else if (playerSelection === 'weapon2' && computerSelection === 'weapon1') {
        ++computerScore;
        log.textContent = "Your arrow glance's off the enemy swordsman's shield! He closes the distance and cuts you down.";
    } else if (playerSelection === 'weapon2' && computerSelection === 'weapon3') {
        ++playerScore;
        log.textContent = "Your arrow pierces the enemy mage's robes before he can even cast a spell! He falls to the floor, dead.";
    } else if (playerSelection === 'weapon3' && computerSelection === 'weapon1') {
        ++playerScore;
        log.textContent = "Your icy magic freezes the heavily-armored swordsmen in place, allowing you to blast him to pieces!";
    } else if (playerSelection === 'weapon3' && computerSelection === 'weapon2') {
        ++computerScore;
        log.textContent = "Before you can loose a spell, the enemy archer's arrow finds your heart, killing you instantly.";
    }
    kills.textContent = `${playerScore}`;
    deaths.textContent = `${computerScore}`;

    console.log(`${playerScore}`);
}

// Adding click event listeners to each weapon to initialize a round.
dscim.addEventListener('click', function (e) {
    playerSelection = 'weapon1';
    computerSelection = getComputerChoice();
    playRPS();
});

bowfa.addEventListener('click', function (e) {
    playerSelection = 'weapon2';
    computerSelection = getComputerChoice();
    playRPS();
});

astaff.addEventListener('click', function (e) {
    playerSelection = 'weapon3';
    computerSelection = getComputerChoice();
    playRPS();
});