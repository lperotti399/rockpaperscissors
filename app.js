


function setComputerSelection () {
//A random number is generated and assigned as the computer"s selection.
    let computerChoiceNum = Math.floor(Math.random()* 3);
    let computerChoiceText;

//The random number is converted into a set of values - rock paper scissors
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


function playRound(computerSelection, playerSelection) {
//Logic is determined to rank which value will beat which value
   if(computerSelection === "rock" && playerSelection === "scissors") {
    computerScore+=1;
    return "rock BEATS scissors.  You LOSE!";
   }
   else if(computerSelection === "rock" && playerSelection === "paper") {
    userScore+=1;
    return "paper BEATS rock.  You WIN!";
   }
   else if(computerSelection === "rock" && playerSelection === "rock") {
    userScore+=1;
    return "rock TIES rock.  You TIE!";
   }

   else if(computerSelection === "scissors" && playerSelection === "paper") {
    computerScore+=1;
    return "scissors BEATS paper.  You LOSE!";
   }
   else if(computerSelection === "scissors" && playerSelection === "rock") {
    userScore+=1;
    return "rock BEATS scissors.  You WIN!";
}
else if(computerSelection === "scissors" && playerSelection === "scissors") {
    userScore+=1;
    return "scissors TIES scissors.  You TIE!";
}
   else if(computerSelection === "paper" && playerSelection === "rock") {
    computerScore+=1;
    return "paper BEATS rock.  You LOSE!";
   }
   
   else if(computerSelection === "paper" && playerSelection === "scissors") {
    userScore+=1;
    return "scissors BEATS paper.  You WIN!";
   }
   else if(computerSelection === "paper" && playerSelection === "paper") {
    userScore+=1;
    return "paper TIES paper.  You TIE!";
   }
}



let userScore = parseInt(0);
let computerScore = parseInt(0);

for(var i=0;i<5;i++){
//User is prompted to enter a value of Rock Paper or Scissors.
    let playerSelection = prompt("Pick a move");
    const computerSelection = setComputerSelection()
//A single round of the game is played
    console.log(playRound(playerSelection, computerSelection))
    console.log("your score = " + userScore);
    console.log("Computer's score = " + computerScore);
}
if(computerScore> userScore) {
    
    console.log(`Your Score: ${userScore}`)
    console.log(`Computer Score: ${computerScore}`)
    console.log('You are the Loser')
}
else {
    console.log(`Your Score: ${userScore}`)
    console.log(`Computer Score: ${computerScore}`)
    console.log('You are the Winner')
}
