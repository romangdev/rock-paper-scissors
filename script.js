//randomly return rock, paper, or scissors as computer choice
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

// Check if player or computer won
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

// track scores then announce winner at end
function trackScore(roundResult) {
    if (roundResult === 'player') {
        playerScore++;
    }
    else if (roundResult === 'computer') {
        computerScore++;
    }
    tally.textContent = `Your Score: ${playerScore} \n Computer Score: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
        disableRPS();
        // reveal final score box
        toggleHideClass();
        displayFinalResult(playerScore, computerScore)
        replayBox.appendChild(replayWinner);
        replayBox.appendChild(replayScoreText);
        replayBox.appendChild(replayScoreNumbers);
        replayBox.appendChild(replayEnter);

        playerScore = 0;
        computerScore = 0;
        // check to see if player hits enter to remove final score box
        document.addEventListener("keydown", (e) => {
            let key = e.key;
            if (key === "Enter") {
                replayBox.classList.add("hide");
                enableRPS();
                tally.textContent = `Your Score: ${playerScore} \n Computer Score: ${computerScore}`;
            }
        });
    }
}

function toggleHideClass() {
    if (replayBox.classList.contains("hide")) {
        replayBox.classList.remove("hide");
    }
}

function displayFinalResult(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        document.body.appendChild(replayBox);
        buttons.forEach((button) => {
            button.classList.add("hide");
        })
        results.classList.add("hide");
        tally.classList.add("hide");
        if (playerScore === 5) {
            replayWinner.innerText = `Computer threw ${computerPlay()}. You win!`;
            replayScoreText.innerText = "--- FINAL SCORE ---";
            replayScoreNumbers.innerText = `Human: ${playerScore}   Computer: ${computerScore}`;
            replayEnter.innerText = "Press \"Enter\" to play again!";
        }
        else if (computerScore === 5) {
            replayWinner.innerText = `Computer threw ${computerPlay()}. You lose!`;
            replayScoreText.innerText = "--- FINAL SCORE ---";
            replayScoreNumbers.innerText = `Human: ${playerScore}   Computer: ${computerScore}`;
            replayEnter.innerText = "Press \"Enter\" to play again!";
        }
    }
}

// hide buttons
function disableRPS() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

// show buttons
function enableRPS() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

// create and display welcome box
function displayWelcomeBox() {
    welcomeContainer.classList.add("welcome-container");
    document.body.appendChild(welcomeContainer);

    welcomeMessage.classList.add("welcome-message");
    welcomeContainer.appendChild(welcomeMessage);
    welcomeMessage.textContent = "Ultimate: Rock, Paper, Scissors!";

    pressEnter.classList.add("press-enter");
    welcomeContainer.appendChild(pressEnter);
    pressEnter.innerText = "\n\n>> Press \"ENTER\" Key To Begin <<";
} 

const welcomeContainer = document.createElement("div");
const welcomeMessage = document.createElement("h1");
const pressEnter = document.createElement("p");

let blink_speed = 350; // every 1000 == 1 second, adjust to suit
let t = setInterval(function () {
    pressEnter.style.visibility = (pressEnter.style.visibility == 'hidden' ? '' : 'hidden');
    replayEnter.style.visibility = (replayEnter.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

// If "enter" key is pressed remove welcome message and reveal RPS options
function removeWelcomeBox(key) {
    welcomeContainer.remove();
    rockButton.classList.remove("hide");
    paperButton.classList.remove("hide");
    scissorsButton.classList.remove("hide");
    results.classList.remove("hide");
    tally.classList.remove("hide");
    tally.textContent = `Your Score: 0 \n Computer Score: 0`;
    results.textContent = 'First to 5 wins. Will it be you??';
}

displayWelcomeBox();

document.addEventListener("keydown", (e) => {
    key = e.key;
    if (key === "Enter") {
        removeWelcomeBox();
    }
});

const allDivs = document.querySelectorAll("div");
const results = document.querySelector(".results");
const tally = document.querySelector(".tally");
const buttons = document.querySelectorAll("button");

const replayBox = document.createElement("div");
replayBox.classList.add("replay-box");
const replayWinner = document.createElement("h2");
replayWinner.classList.add("replay-winner");
const replayScoreText = document.createElement("div");
replayScoreText.classList.add("replay-score-text");
const replayScoreNumbers = document.createElement("div");
replayScoreNumbers.classList.add("replay-score-numbers");
const replayEnter = document.createElement("div");
replayEnter.classList.add("replay-enter");

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
let key = null;

rockButton.classList.add("hide");
paperButton.classList.add("hide");
scissorsButton.classList.add("hide");

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