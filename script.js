//randomly return rock, paper, or scissors
function computerPlay() {
    let numChoice = Math.random();
    numChoice = numChoice.toFixed(2);
    numChoice *= 100;
    //set random number between 1 and 99
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
function playRound() {
    let playerSelection = getPlayerSelection();
    let computerSelection = computerPlay();

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log('The computer threw ' + computerSelection + '. It\'s a tie!');
        return 'tie';
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('The computer threw ' + computerSelection + '. Paper beats rock! You win!');
        return 'player';
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper') {
        console.log('The computer threw ' + computerSelection + '. Paper beats rock! You lose!');
        return 'computer';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('The computer threw ' + computerSelection + '. Scissors beats paper You lose!');
        return 'computer';
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        console.log('The computer threw ' + computerSelection + '. Scissors beats paper! You win!');
        return 'player';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('The computer threw ' + computerSelection + '. Rock beats scissors! You lose!');
        return 'computer';
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        console.log('The computer threw ' + computerSelection + '. Rock beats scissors! You win!');
        return 'player';
    }
    else {
        console.log('You must\'ve typed something wrong');
    }
}

//get player's selection
function getPlayerSelection() {
    let flag = true;
    let selection = null;
    //ensure selection is entered correctly
    while (flag === true) {
        selection = prompt('Please enter \'rock\', \'paper\', or \'scissors\'.');
        selection = selection.toLowerCase();
        if (selection !== "rock" && selection != "paper" && selection != "scissors") {
            alert("Looks like you entered your selection incorreclty. Please try again.");
        }
        else {
            flag = false;
        }
    }
    return selection;
}

//run full game
function game() {
    let roundResult = null;
    let playerScore = 0;
    let computerScore = 0;
    //run 5 rounds and tally scores
    for (let i = 0; i < 5; i++) {
        roundResult = playRound();
        if (roundResult === 'player') {
            playerScore++;
        }
        else if (roundResult === 'computer') {
            computerScore++;
        }
    }
    //report score result
    if (playerScore === computerScore) {
        console.log("The final result is a tie!!!\nYou: " + playerScore + "\nComputer: " + computerScore);
    }
    else if (playerScore > computerScore) {
        console.log("The final result is a win for you!!!\nYou: " + playerScore + "\nComputer: " + computerScore);
    }
    else {
        console.log("The final result is a loss for you...\nYou: " + playerScore + "\nComputer: " + computerScore);
    }
}