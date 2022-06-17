// function called computerPlay that will return rock, paper or scissors.
// function playRound that plays a single round, with two parameters: playerSelection and computerSelection. Then return a string that declares the winner
// playerSelection must be case-insensitive (rock, Rock, ROCK)

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min)) +min;
}
function computerPlay() {
    let pcChoice = getRandomInt(0,4)
        if (pcChoice===1) {
            return "Rock"
        } else if (pcChoice===2) {
            return "Paper"
        } else (pcChoice===3) 
            return "Scissors"
};

function playRound (playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {return "It is a tie"}
    else if (playerSelection=="rock" && computerSelection=="paper") { return "You lost"}
    else if (playerSelection=="rock" && computerSelection=="scissors") { return "You won"}
    else if (playerSelection=="paper" && computerSelection=="rock") { return "You won"}
    else if (playerSelection=="paper" && computerSelection=="scissors") {return "You lost"}
    else if (playerSelection=="scissors" && computerSelection=="rock") {return "You lost"}
    else if (playerSelection=="scissors" && computerSelection=="paper") {return "You won"}
    else {return "something went wrong"}
};
// make game()
function game() {
    playerScore = 0;
    computerScore = 0;
    while (playerScore < 3 || computerScore < 3) {
        playerSelection = prompt("Choose rock, paper or scissors");
        computerSelection = computerPlay();
        if (playRound(playerSelection,computerSelection)== "It is a tie") console.log("It was a tie");
        else if (playRound(playerSelection,computerSelection) == "You won") { playerScore++;}
        else if (playRound(playerSelection,computerSelection) =="You lost") {computerScore++;}
        else {return "Invalid input"};
        console.log("The score is: " + playerScore + " vs "+computerScore)
        if (playerScore==3) {return "You won the game"}
        else if (computerScore==3) {return "You lost the game"};
    }
}