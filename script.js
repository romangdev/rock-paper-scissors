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
function playRound(playerSelection, computerSelection) {

    computerSelection = computerPlay().toLowerCase();

    if (playerSelection === computerSelection) {
        results.textContent = 'The computer threw ' + computerSelection + '. It\'s a tie!';
        return 'tie';
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        results.textContent = 'The computer threw ' + computerSelection + '. Paper beats rock! You lose!';
        return 'computer';
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper') {
        results.textContent = 'The computer threw ' + computerSelection + '. Paper beats rock! You win!';
        return 'player';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        results.textContent = 'The computer threw ' + computerSelection + '. Scissors beats paper! You win!';
        return 'player';
    }
    else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        results.textContent = 'The computer threw ' + computerSelection + '. Scissors beats paper! You lose!';
        return 'computer';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        results.textContent = 'The computer threw ' + computerSelection + '. Rock beats scissors! You lose!';
        return 'computer';
    }
    else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        results.textContent = 'The computer threw ' + computerSelection + '. Rock beats scissors! You win!';
        return 'player';
    }
    else {
        results.textContent = 'You must\'ve typed something wrong';
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
    //run 1 round and tally score
    roundResult = playRound();
    if (roundResult === 'player') {
        playerScore++;
    }
    else if (roundResult === 'computer') {
        computerScore++;
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

let roundResult = null;
let playerScore = 0;
let computerScore = 0;
let flag = false;
const buttons = document.querySelectorAll("button");


    // run one round when button is clicked with correct player selection
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let playerSelection = e.target.className;
        roundResult = playRound(playerSelection);
        if (roundResult === 'player') {
            playerScore++;
        }
        else if (roundResult === 'computer') {
            computerScore++;
        }
        tally.textContent = `Your Score: ${playerScore} \n Computer Score: ${computerScore}`;
        if (playerScore === 5) {
            tally.textContent = `Your Score: ${playerScore} \n Computer Score: ${computerScore} \n
            That's it, YOU WIN!`;
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore === 5) {
            tally.textContent = `Your Score: ${playerScore} \n Computer Score: ${computerScore} \n
            Whomp whomp....you LOSE!`;
            playerScore = 0;
            computerScore = 0;
        }
    });
});

const results = document.querySelector(".results");
const tally = document.querySelector(".tally");