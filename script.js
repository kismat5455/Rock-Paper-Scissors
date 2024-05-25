
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


function playRound(humanChoice, computerChoice) {
    console.log(`Computer choice: ${computerChoice}`);
    console.log(`Human choice: ${humanChoice}`);

    if (computerChoice === humanChoice) {
        console.log('It is a tie!');
    } else if (computerChoice === 'rock' && humanChoice === 'scissors' ||
        computerChoice === 'paper' && humanChoice === 'rock' ||
        computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log('Computer wins!');
        computerScore++;
    } else {
        console.log('Human wins!');
        userScore++;
    }

    console.log(`Computer score: ${computerScore}`);
    console.log(`Human score: ${userScore}`)

}






function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

}

playGame();


