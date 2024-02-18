// Importing the prompt module
const prompt = require('prompt');

// Function to generate computer selection
function generateComputerSelection() {
    // Generating a random number between 0 and 1
    const randomNumber = Math.random();

    // Mapping the random number to ROCK, PAPER, or SCISSORS based on ranges
    if (randomNumber < 0.34) {
        return 'PAPER';
    } else if (randomNumber < 0.67) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

// Function to determine the winner of the game
function determineWinner(userSelection, computerSelection) {
    // Checking if it's a tie
    if (userSelection === computerSelection) {
        return "It's a tie";
    } else if (
        // Determining the scenarios where the user wins
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        return 'User Wins';
    } else {
        // If the above conditions are not met, then computer wins
        return 'Computer Wins';
    }
}

// Starting the prompt interface
prompt.start();

// Getting the user's selection
prompt.get(['userSelection'], function (err, result) {
    // Handling errors
    if (err) {
        return console.error('An error occurred: ', err);
    }

    // Converting the user's selection to uppercase for consistency
    const userSelection = result.userSelection.toUpperCase();

    // Generating the computer's selection
    const computerSelection = generateComputerSelection();

    // Displaying both selections
    console.log('User Selection:', userSelection);
    console.log('Computer Selection:', computerSelection);

    // Determining the outcome of the game and displaying it
    const resultMessage = determineWinner(userSelection, computerSelection);
    console.log('Outcome:', resultMessage);
});
