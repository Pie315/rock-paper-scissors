console.log("Code working as intended!");


// Returns either rock paper or scissors 
function getComputerChoice() { 
    OneToThree = Math.floor(Math.random() * 3);
    console.log(OneToThree);
    
    if (OneToThree == 0) {
        return "Rock";
    } else if (OneToThree == 1) {
        return "Paper";
    } else if (OneToThree == 2) {
        return "Scissors";
    } else {
        return "error";
    }
}

const userChoice = prompt("What is your choice?"); // Gets user input 

