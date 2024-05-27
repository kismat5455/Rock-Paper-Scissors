
/**
 * This script is for a Rock-Paper-Scissors game.
 * It allows the user to play against the computer and keeps track of the scores.
 * The game consists of rounds where the user and computer make their choices (rock, paper, or scissors),
 * and the winner of each round is determined based on the game rules.
 * At the end of the game, the overall winner is determined based on the scores.
 * The script also includes event listeners for buttons to allow the user to make their choice.
 *
 * @file This file contains the JavaScript code for the Rock-Paper-Scissors game.
 * @summary Rock-Paper-Scissors game script.
 * @version 1.0
 *
 */

//global variables

//score variables to keep track of the scores
let userScore = 0;
let computerScore = 0;

/**
 * Generates a random choice for the computer.
 * @returns {string} The computer's choice (rock, paper, or scissors).
 */
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const randomNumber = Math.floor(Math.random() * 3);//generates a random number between 0 and 2

    return choices[randomNumber];
}

/**
 * Prompts the user to enter their choice and validates it.
 * @returns {string} The user's choice (rock, paper, or scissors).
 */
function getHumanChoice() {

    let userChoice = prompt('Enter your choice: rock, paper or scissors').toLowerCase();

    while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        userChoice = prompt('Invalid choice! Enter your choice: rock, paper or scissors').toLowerCase();
    }

    return userChoice;
}

/**
 * Plays a round of the game and determines the winner.
 * @param {string} humanChoice - The user's choice (rock, paper, or scissors).
 * @param {string} computerChoice - The computer's choice (rock, paper, or scissors).
 */
function playRound(humanChoice, computerChoice) {
    console.log(`Computer choice: ${computerChoice}`);
    console.log(`Human choice: ${humanChoice}`);

    if (computerChoice === humanChoice) {
        console.log('This round is a tie!');
    } else if (computerChoice === 'rock' && humanChoice === 'scissors' ||
        computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log('Computer wins current round!');
        computerScore++;
    } else {
        console.log('Human wins current round!');
        userScore++;
    }

    console.log(`Computer score: ${computerScore}`);
    console.log(`Human score: ${userScore}`)

}

/**
 * Determines the overall winner of the game.
 */
function determineWinner() {
    if (userScore > computerScore) {
        console.log('Human wins the game!');
    } else if (userScore < computerScore) {
        console.log('Computer wins the game!');
    } else {
        console.log('It is a tie!');
    }
}



const buttons = document.querySelector(".buttons");
console.log(buttons);
buttons.addEventListener('click', function (event) {
    switch (event.target.id) {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
    }
});


