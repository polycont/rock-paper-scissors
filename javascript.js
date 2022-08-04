/*

I need to create an implementation of Rock Paper Scissors that can be played 
entirely from the console. It does not have an interface, but it will need
to be able to take text inputs from the player -- three, to be specific:
rock, paper, or scissors. The program also needs to generate a selection
for the computer, and subsequently compare its own selection with the player's.

The program must keep track of the score for each 'player,' and continue initiating new game rounds
until one player earns five points. When that happens, the program needs to stop the game entirely
and announce the winner.

The flow will look something like this.

Create a function to compare the two scores. (?)

Greet the player by name and instruct them to enter rock, paper, or scissors.
Ensure the player's input does not need to be case-sensitive.
Create function to get the computer's selection.

Compare the player's selection against the computer's selection.

Wrap the following in a loop that stops when either player's score reaches 5.

*/

/* Prompt the player for their name and store it in a variable. */
const playerName = prompt('What is your name?');

/* Create a variable to track the player's score with an initial value of 0.
Create a variable to track the computer's score with an initial value of 0. */

let playerScore = 0;
let computerScore = 0;

/* Greet the player by name and instruct them to enter rock, paper, or scissors. */

console.log(`Hello, ${playerName}. Welcome to Rock Paper Scissors. Please enter your choice!`)




/*

IF player selected ROCK and the computer selected PAPER...
    Increase computer's score by 1.
    Log 'Sorry, you lost this round! Paper beats Rock.' to the console.
ELSE IF player selected ROCK and the computer selected SCISSORS...
    Increase player's score by 1.
    Log 'Nice! You won this round! Rock beats Scissors.' to the console.
ELSE IF player selected ROCK and the computer selected ROCK...
    Log 'This round is a tie! No points awarded this time.' to the console.

ELSE IF player selected PAPER and the computer selected PAPER...
    Log 'This round is a tie! No points awarded this time.' to the console.
ELSE IF player selected PAPER and the computer selected SCISSORS...
    Increase computer's score by 1.
    Log 'Sorry, you lose this round! Paper beats Rock.' to the console.
ELSE IF player selected PAPER and the computer selected ROCK...
    Increase player's score by 1.
    Log 'Nice! You won this round! Rock beats Scissors.' to the console.

ELSE IF player selected SCISSORS and the computer selected PAPER...
    Increase player's score by 1.
    Log 'Nice! You won this round! Scissors beat Paper.' to the console.
ELSE IF player selected SCISSORS and the computer selected SCISSORS...
    Log 'This round is a tie! No points awarded this time.' to the console.
ELSE IF player selected SCISSORS and the computer selected ROCK...
    Increase computer's score by 1.
    Log 'Sorry, you lose this round! Rock beats scissors.' to the console.

Exit loop
Log a congratulations message to the console. 

TODO: Create a play again function?



*/