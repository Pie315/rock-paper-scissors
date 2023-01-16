console.log("Code working as intended!");


let wins = 0;
let losses = 0;
let ties = 0;
let lastClicked = "";
let result = [];

// Returns either rock paper or scissors 
function getComputerChoice() {
    OneToThree = Math.floor(Math.random() * 3);
    if (OneToThree == 0) {
        return "rock";
    } else if (OneToThree == 1) {
        return "paper";
    } else if (OneToThree == 2) {
        return "scissors";
    } else {
        return "error in getCompChoice";
    }
}

// Returns lowercase version of user input
function getUserChoice(playChoice) {
    playChoice = playChoice.toLowerCase();
    return playChoice;
}

// returns "win", "loss", or "tie" from player perspective
function winner(player, computer) {
    if (player == "rock") {
        switch (computer) {
            case "rock": return "tie";
            case "paper": return "loss";
            case "scissors": return "win";
        }
    } else if (player == "paper") {
        switch (computer) {
            case "rock": return "win";
            case "paper": return "tie";
            case "scissors": return "loss";
        }
    } else if (player == "scissors") {
        switch (computer) {
            case "rock": return "loss";
            case "paper": return "win";
            case "scissors": return "tie";
        }
    } else {
        return "error in winner";
    }
}

// returns the outcome of a single game
function playRound(choice) {
    const computer = getComputerChoice();
    const user = getUserChoice(choice);
    let result = winner(user, computer);
    switch (result) {
        case "win": wins++;
        case "loss": losses++;
        case "tie": ties++;
    }
    return [computer, user, result];
}



const buttons = document.querySelectorAll('button');
const resultText = document.querySelector("#result");
const outcomeText = document.createElement('div');
const stats = document.querySelector('.stats');

function onClick(clicked, button) {
    result = (playRound(clicked));
    
    
    button.classList.add('pressed');
    lastClicked = button;
}

function onRelease(button) {
    if (lastClicked == "") {
        return;
    }
    button.classList.remove('pressed');
    
    resultText.textContent = `You picked ${result[1]} and the computer picked ${result[0]}`;
    outcomeText.textContent = `Result: ${result[2]}`;
    resultText.appendChild(outcomeText);
    stats.textContent = `You have ${wins} wins, ${losses} losses, and ${ties} ties`
}



buttons.forEach((button) => {
    button.addEventListener('mousedown', () => {onClick(button.id, button)});
});
document.addEventListener('mouseup', () => {onRelease(lastClicked)});