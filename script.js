//randomly return rock, paper, or scissors
function computerPlay() {
    let numChoice = Math.random();
    numChoice = numChoice.toFixed(2);
    numChoice *= 100;
    //set choice between 1 and 99
    if (numChoice === 100) {
        numChoice -= 1;
    }
    if (numChoice === 0) {
        numChoice += 1;
    }
    // return choice
    if (numChoice >= 1 && numChoice <= 33) {
        return 'Rock';
    } 
    else if (numChoice >= 34 && numChoice <= 66) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

//Sees if player or computer won
function oneRound() {
    let playerSelection = getPlayerSelection();
    let computerSelection = computerPlay();

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log('The computer threw ' + computerSelection + '. It\'s a tie!');
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('The computer threw ' + computerSelection + '. Paper beats rock!');
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper') {
        console.log('The computer threw ' + computerSelection + '. Paper beats rock!');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('The computer threw ' + computerSelection + '. Scissors beats paper!');
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        console.log('The computer threw ' + computerSelection + '. Scissors beats paper!');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('The computer threw ' + computerSelection + '. Rock beats scissors!');
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        console.log('The computer threw ' + computerSelection + '. Rock beats scissors!');
    }
}

//get player's selection
function getPlayerSelection() {
    let selection = prompt('Please enter \'rock\', \'paper\', or \'scissors\'.');
    return selection;
}
