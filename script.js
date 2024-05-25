
//global variables

//score variables to keep track of the scores
let userScore = 0;
let computerScore = 0;



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const randomNumber = Math.floor(Math.random() * 3);//generates a random number between 0 and 2

    return choices[randomNumber];
}


function getHumanChoice() {

    let userChoice = prompt('Enter your choice: rock, paper or scissors').toLowerCase();

    while (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        userChoice = prompt('Invalid choice! Enter your choice: rock, paper or scissors').toLowerCase();
    }

    return userChoice;
}



