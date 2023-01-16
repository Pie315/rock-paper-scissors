console.log("Code working as intended!");


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
    return [computer, user, result];
    //console.log("The computer picked "+computer+" and you picked "+user+" resulting in: "+result);
}

let wins = 0;
let losses = 0;
let ties = 0;
let lastClicked = "";

const buttons = document.querySelectorAll('button');

function onClick(clicked, button) {
    playRound(clicked);
    console.log(clicked);
    button.classList.add('pressed');
    lastClicked = button;
}

function onRelease(button) {
    if (lastClicked == "") {
        return;
    }
    button.classList.remove('pressed');
}

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('mousedown', () => {onClick(button.id, button)});
    //button.addEventListener('mouseup', () => {onRelease(lastClickedId, lastClicked)});
    //button.addEventListener('mouseleave', () => {onRelease(button.id, button)})
});

document.addEventListener('mouseup', () => {onRelease(lastClicked)});

const resultText = document.querySelector("#result");

resultText.textContent = "hello World";