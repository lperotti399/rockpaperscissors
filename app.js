


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
let userScore = parseInt(0);
let computerScore = parseInt(0);

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





//for(var i=0;i<10;i++){
//Break the loop once a player reaches 5 points
 //   if(userScore===5 || computerScore ===5) {break;}

//Get a list of buttons
let buttons = document.querySelectorAll('button');

//Set playerSelection variable
let playerSelection = 0

//Set the playerSection to the id of the button click when clicked
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
    //User picks a selection    
         playerSelection = button.id;
    //Computer picks a selection
    const computerSelection = setComputerSelection()
    //A single round of the game is played
    //Log Round score
    console.log(playRound(playerSelection, computerSelection))
    //Log your score
    console.log("your score = " + userScore);
    //Log computer score
    console.log("Computer's score = " + computerScore);
    //Log final score
    if((computerScore > userScore) && (computerScore ==5 || userScore ==5)
        ) {
    console.log(`GAME OVER`)
    console.log(`Your Score: ${userScore}`)
    console.log(`Computer Score: ${computerScore}`)
    console.log('You are the Loser')
    }
    else if((computerScore< userScore) && (computerScore ==5 || userScore ==5)) {
    console.log(`GAME OVER`)
    console.log(`Your Score: ${userScore}`)
    console.log(`Computer Score: ${computerScore}`)
    console.log('You are the Winner')
    }
    }
    
    )
})


    





//}


/*let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        console.log(button.id);
    })
})*/