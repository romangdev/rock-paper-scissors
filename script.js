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


const replayBox = document.createElement("div");
replayBox.classList.add("replay-box");
const replayScore = document.createElement("h2");
replayScore.classList.add("replay-score");

// track scores then announce winner at end
function trackScore(roundResult) {
    if (roundResult === 'player') {
        playerScore++;
    }
    else if (roundResult === 'computer') {
        computerScore++;
    }
    tally.textContent = `Your Score: ${playerScore} \n Computer Score: ${computerScore}`;
    if (playerScore === 5) {
        if (replayBox.classList.contains("hide")) {
            replayBox.classList.remove("hide");
        }
        tally.textContent = `Your Score: ${playerScore} \n Computer Score: ${computerScore} \n
        That's it, YOU WIN!`;

        document.body.appendChild(replayBox);
        replayScore.textContent = `You win! FINAL SCORE --- \nHuman: ${playerScore}  Computer: ${computerScore} \nPress
        "Enter" to play again!`;
        replayBox.appendChild(replayScore);

        playerScore = 0;
        computerScore = 0;

        document.addEventListener("keydown", (e) => {
            let key = e.key;
            console.log(key);
            if (key === "Enter") {
                replayBox.classList.add("hide");
            }
        });
    }
    else if (computerScore === 5) {
        if (replayBox.classList.contains("hide")) {
            replayBox.classList.remove("hide");
        }
        tally.textContent = `Your Score: ${playerScore} \n Computer Score: ${computerScore} \n
        Whomp whomp....YOU LOSE!`;

        document.body.appendChild(replayBox);
        replayScore.textContent = `You lose! FINAL SCORE --- \nHuman: ${playerScore}  Computer: ${computerScore} \nPress
        "Enter" to play again!`;
        replayBox.appendChild(replayScore);

        playerScore = 0;
        computerScore = 0;

        document.addEventListener("keydown", (e) => {
            let key = e.key;
            console.log(key);
            if (key === "Enter") {
                replayBox.classList.add("hide");
            }
        });
    }
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
let key = null;

rockButton.classList.add("hide");
paperButton.classList.add("hide");
scissorsButton.classList.add("hide");

// create and display welcome box
const welcomeContainer = document.createElement("div");
welcomeContainer.classList.add("welcome-container");
document.body.appendChild(welcomeContainer);

const welcomeMessage = document.createElement("h1");
welcomeMessage.classList.add("welcome-message");
welcomeContainer.appendChild(welcomeMessage);
welcomeMessage.textContent = "Rock, Paper, Scissors... Are You READY?!?";

const pressEnter = document.createElement("p");
pressEnter.classList.add("press-enter");
welcomeContainer.appendChild(pressEnter);
pressEnter.textContent = "Press \"ENTER\" Key To Begin";

// If "enter" key is pressed remove welcome message and reveal RPS options
document.addEventListener("keydown", (e) => {
    key = e.key;
    console.log(key);
    if (key === "Enter") {
        welcomeContainer.remove();
        rockButton.classList.remove("hide");
        paperButton.classList.remove("hide");
        scissorsButton.classList.remove("hide");
    }
});

const allDivs = document.querySelectorAll("div");
const results = document.querySelector(".results");
const tally = document.querySelector(".tally");
const buttons = document.querySelectorAll("button");

let roundResult = null;
let playerScore = 0;
let computerScore = 0;
let flag = false;


// run one round when button is clicked with correct player selection
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let playerSelection = e.target.className;
        roundResult = playRound(playerSelection);
        trackScore(roundResult);
    });
});