
//A random number is generated and assigned as the computer"s selection.
//The random number is converted into a set of values - rock paper scissors
function setComputerSelection () {
    let computerChoiceNum = Math.floor(Math.random()* 3);
    let computerChoiceText;

    switch (computerChoiceNum) {
        case 0:
            computerChoiceText = "rock";
            break;
        case 1:
            computerChoiceText = "paper";
            break;
        case 2:
            computerChoiceText = "scissors"
            break;
    }
    return computerChoiceText;
}

//let computerSelection = setComputerSelection();
//let getPlayerChoice = prompt("rock paper scissors SHOOT!  (Enter your choice)")

function playRound(computerSelection, playerSelection) {
    
   if(computerSelection === "rock" && playerSelection === "scissors") {
    computerScore++;
    return "rock BEATS scissors.  You LOSE!";
   }
   else if(computerSelection === "rock" && playerSelection === "paper") {
    userScore++;
    return "paper BEATS rock.  You WIN!";
   }
   else if(computerSelection === "rock" && playerSelection === "rock") {
    userScore++;
    return "rock TIES rock.  You TIE!";
   }

   else if(computerSelection === "scissors" && playerSelection === "paper") {
    computerScore++;
    return "scissors BEATS paper.  You LOSE!";
   }
   else if(computerSelection === "scissors" && playerSelection === "rock") {
    userScore++;
    return "rock BEATS scissors.  You WIN!";
}
else if(computerSelection === "scissors" && playerSelection === "scissors") {
    userScore++;
    return "scissors TIES scissors.  You TIE!";
}
   else if(computerSelection === "paper" && playerSelection === "rock") {
    computerScore++;
    return "paper BEATS rock.  You LOSE!";
   }
   
   else if(computerSelection === "paper" && playerSelection === "scissors") {
    userScore++;
    return "scissors BEATS paper.  You WIN!";
   }
   else if(computerSelection === "paper" && playerSelection === "paper") {
    userScore++;
    return "paper TIES paper.  You TIE!";
   }
}



let userScore = parseInt(0);
let computerScore = parseInt(0);

for(var i=0;i<5;i++){
    let playerSelection = prompt("Pick a move");
    const computerSelection = setComputerSelection()
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
}
if(computerScore> userScore) {console.log('You are the Loser')}
else {console.log('You are the Winner')}
