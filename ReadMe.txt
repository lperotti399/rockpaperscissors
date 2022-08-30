//Understand the Problem:
A zero-sum game, it has three possible outocomes: a draw,
a win or a loss.
- Rock beats Scissor; Rock loses to Paper
- Paper beats Rock; Paper loses to Scissors
- Scissors beats Paper; Scissors loses to Rock

//Plan:
1)  Does your program have a user interface?
What will it look like?  What functionality will the interface
have?  Sketch this out on Paper
- The user interface will be the browser and the console.  The user will be prompted via the browser and results will show in the console.


2)  What inputs will your program have?  Will the user enter data
or will you get input from somwhere else?
- The user will in Rock Paper or Scissors.  The values will not be case sensitive.

3)  What's the desired output?
- The desired output will log to the console whether what the computers selection was and the result of the game such as "Rock beats Scissors, You Lose!"

4)  Given your inputs, what are the steps necessary to return
the desired output?
//Pseudocode || Algorithm:
>> User is prompted to enter a value of Rock Paper or Scissors.
>> The input is stored and converted to account for non-case sensitive values
>> A random number is generated and assigned as the computer's selection.
>> The random number is converted into a set of values - Rock Paper Scissors
>> Logic is determined to rank which value will beat which value
>> A single round of the game is played
>> Create logic that creates rounds, keeps score and reports a winner or loser at the end of 5 rounds



Exercise Steps:
Write a function that returns a random number for the computers
choice called getComputerChoice.

Write a function prompts the user to end Rock, Paper or Scissors value
called getplayerChoice.

Write a function that plays a single round of Rock Paper Scissors.
The function should take two parameters - the playerSelection
and computerSelection and return a string that declares the winner of the round
like so: "You Lose!  Paper beats Rock"
    Make your function's playerSelection parameter case-insensitive
    (so users can input rock, ROCK, RocK or any other variation)

Write a new funciton called game().  Call the playRound function
inside of this one to play a 5 round game that keeps score and 
reports a winner or a loser at the end.


