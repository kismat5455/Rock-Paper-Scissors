

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const randomNumber = Math.floor(Math.random() * 3);//generates a random number between 0 and 2

    return choices[randomNumber];
}



