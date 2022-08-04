/*

THE PROBLEM:

I need to create an implementation of Rock Paper Scissors that can be played 
entirely from the console. It does not have an interface, but it will need
to be able to take text inputs from the player -- three, to be specific:
rock, paper, or scissors. The program also needs to generate a selection
for the computer, and subsequently compare its own selection with the player's.

The program must keep track of the score for each 'player,' and continue initiating new game rounds
until one player earns five points. When that happens, the program needs to stop the game entirely
and announce the winner.

*/

/* TODOS

TODO: Create a play again function?
TODO: Add while loop to handle invalid player input

*/


/* Prompt the player for their name and store it in a variable. */
const playerName = prompt('What is your name?');

/* Create a variable to track the player's score with an initial value of 0.
Create a variable to track the computer's score with an initial value of 0. */
let playerScore = 0;
let computerScore = 0;

/* Create a function to play the game */
function playRPS() {

    /* Instruct them to enter rock, paper, or scissors. */
    function getPlayerChoice() {
        let playerChoice = prompt('Please enter your choice!').toLowerCase();
        console.log(playerChoice);
        return playerChoice;
    }

    /* Create a function to calculate the computer's choice and return the value */
    function getComputerChoice() {
        let choiceCalc = Math.floor(Math.random() * 100);
        if (choiceCalc > 33 && choiceCalc < 66) {
            return 'rock';
        } else if (choiceCalc < 33) {
            return 'paper';
        } else if (choiceCalc > 66) {
            return 'scissors';
        }
    }

    alert(`Hello, ${playerName}. Welcome to Rock Paper Scissors!`)

    /* Create a loop to continue playing the game until the score reaches 5 */
    while (playerScore < 5 && computerScore < 5) {
        
        /* Declare variables for player & computer choices */
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        /* Compare player's choice to computer's and award a point (or a tie) based on which selection wins */
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            console.log('Sorry, you lost this round! Paper beats Rock.');
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++
            console.log('Nice! You won this round! Rock beats Scissors.');
        } else if (playerSelection === 'rock' && computerSelection === 'rock') {
            console.log('This round is a tie! No points awarded this time.');
        } else if (playerSelection === 'paper' && computerSelection === 'paper') {
            console.log('This round is a tie! No points awarded this time.');
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            console.log('Sorry, you lost this round! Scissors beat Paper.');
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            console.log('Nice! You won this round! Paper beats Rock.');
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++
            console.log('Nice! You won this round! Scissors beat Paper.');
        } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
            console.log('This round is a tie! No points awarded this time.');
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++
            console.log('Sorry, you lost this round! Paper beats Rock.');
        }
        console.log(`Your Score: ${playerScore} points. Computer Score: ${computerScore} points.`);
}

/* Print a win or loss message to the console. */
if (playerScore === 5) {
    console.log(`Congratulations! You won with ${playerScore} points to the computer's ${computerScore} points!`);
} else {
    console.log(`Darn! Looks like the computer wins this time with ${computerScore} points versus your ${playerScore} points.`);
}

}

playRPS();