
//A random number is generated and assigned as the computer's selection.
function getComputerChoice () {
    return Math.floor(Math.random()* 3);
}

let computerChoiceNum = getComputerChoice();

//The random number is converted into a set of values - Rock Paper Scissors
function setComputerSelection () {
    let computerChoiceText;

    switch (computerChoiceNum) {
        case 0:
            computerChoiceText = "Rock";
            break;
        case 1:
            computerChoiceText = "Paper";
            break;
        case 2:
            computerChoiceText = "Scissors"
            break;
    }
    return computerChoiceText;
}

let computerSelection = setComputerSelection();
let getPlayerChoice = prompt("Rock Paper Scissors SHOOT!  (Enter your choice)")
let playerSelection = getPlayerChoice[0].toUpperCase() + getPlayerChoice.toLowerCase().substring(1);
let userScore = parseInt(0);
let computerScore = parseInt(0);
function playRound(computerSelection, playerSelection) {
    
   if(computerSelection === 'Rock' && playerSelection === 'Scissors') {
    ++computerScore;
    return 'Rock BEATS Scissors.  You LOSE!';
   }
   else if(computerSelection === 'Scissors' && playerSelection === 'Paper') {
    ++computerScore;
    return 'Scissors BEATS Paper.  You LOSE!';
   }
   else if(computerSelection === 'Paper' && playerSelection === 'Rock') {
    ++computerScore;
    return 'Paper BEATS Rock.  You LOSE!';
   }
   else if(computerSelection === 'Rock' && playerSelection === 'Paper') {
    ++userScore;
    return 'Paper BEATS Rock.  You WIN!';
   }
   else if(computerSelection === 'Paper' && playerSelection === 'Scissors') {
    ++userScore;
    return 'Scissors BEATS Paper.  You WIN!';
   }
   else if(computerSelection === 'Scissors' && playerSelection === 'Rock') {
    ++userScore;
    return 'Rock BEATS Scissors.  You WIN!';
}
}
let roundOutputText = playRound(computerSelection, playerSelection);
//console.log(roundOutputText);
//console.log(playerSelection);
//console.log(computerSelection);



for(var i=0;i<5;i++){
    let playerSelection = prompt("Pick a move");
    let computerSelection = setComputerSelection()
    console.log(roundOutputText)
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
}

