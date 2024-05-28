
/**
 * This script is for a Rock-Paper-Scissors game.
 * It allows the user to play against the computer and keeps track of the scores.
 * The game consists of rounds where the user and computer make their choices (rock, paper, or scissors),
 * and the winner of each round is determined based on the game rules.
 * At the end of the game, the overall winner is determined based on the scores.
 * The script also includes event listeners for buttons to allow the user to make their choice.
 */

//global variables
let userScore = 0;
let computerScore = 0;
let round = 5;

/**
 * Generates a random choice for the computer.
 */
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const randomNumber = Math.floor(Math.random() * 3);//generates a random number between 0 and 2

    return choices[randomNumber];
}

/**
 * Plays a round of the game and determines the winner.
 */
function playRound(humanChoice, computerChoice) {
    if (round <= 0) {
        determineWinner();
        return; // Exit early if no rounds remain
    }

    // Update Choice elements
    updateChoiceDisplays(humanChoice, computerChoice);


    // Determine round outcome
    const resultText = getRoundResultText(humanChoice, computerChoice);
    const resultColor = (resultText.includes("You win")) ? 'green' : 'red';

    // Update result display
    updateResultDisplay(resultText, resultColor);

    // Update scores and chances left
    updateScoresDisplay();
    updateChancesLeftDisplay();
}

function determineWinner() {
    const resultText = getFinalResultText(userScore, computerScore);
    const resultColor = (resultText.includes("You win")) ? 'green' : 'red';
    updateResultDisplay(resultText, resultColor);
}

// Helper functions 

function updateChancesLeftDisplay() {
    document.getElementById('chanceLeft').textContent = `Number of Games Left(Tie does not reduce game count): ${round}`;
}

function updateChoiceDisplays(humanChoice, computerChoice) {
    document.getElementById('computerChoice').textContent = computerChoice.toUpperCase();
    document.getElementById('humanChoice').textContent = humanChoice.toUpperCase();
}

function updateScoresDisplay() {
    document.getElementById('humanScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function updateResultDisplay(resultText, resultColor) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = resultText;
    resultElement.style.color = resultColor;
}

function getRoundResultText(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        return '  This round is a tie!';
    } else if (didComputerWin(computerChoice, humanChoice)) {
        round--;
        computerScore++;
        if (round === 0) {
            updateChancesLeftDisplay()
            updateScoresDisplay();
            determineWinner();
        } else {
            return '  Computer wins current round!';
        }

    } else {
        round--;
        userScore++;
        if (round === 0) {
            updateChancesLeftDisplay()
            updateScoresDisplay();
            determineWinner();
        } else {
            return '  You win current round!';
        }
    }
}

function didComputerWin(computerChoice, humanChoice) {
    return (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper');
}

function getFinalResultText(userScore, computerScore) {
    if (userScore > computerScore) {
        return '  Congratulations! You win the game!';
    } else if (userScore < computerScore) {
        return '  Sorry! Computer wins the game! Try again!';
    } else {
        return '  The game is a tie! Try again! Let\'s see who wins next time!';
    }
}



const buttons = document.querySelector(".buttons");

buttons.addEventListener('click', function (event) {
    switch (event.target.parentElement.id) {
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


// Inside the script, where the resetButton is initially defined:

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', resetGame);

function resetGame() {
    userScore = 0;
    computerScore = 0;
    round = 5;

    updateScoresDisplay();
    updateChancesLeftDisplay();

    // Reset choice and result displays
    const choiceElements = ['computerChoice', 'humanChoice'];
    const resultElement = document.getElementById('result');

    choiceElements.forEach(elementId => {
        document.getElementById(elementId).textContent = 'None';
    });

    resultElement.textContent = '';
}

