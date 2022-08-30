
//A random number is generated and assigned as the computer's selection.
function getComputerChoice () {
    return Math.floor(Math.random()* 3);
}

let computerChoiceNum = getComputerChoice();
console.log(computerChoiceNum);


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

console.log(setComputerSelection());
