// function called computerPlay that will return rock, paper or scissors.
// function playRound that plays a single round, with two parameters: playerSelection and computerSelection. Then return a string that declares the winner
// playerSelection must be case-insensitive (rock, Rock, ROCK)

function getRandomInt(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min)) +min;
}
function computerPlay() {
        if (getRandomInt(0,4)==1) {
            return "Rock"
        } else if (getRandomInt(0,4)==2) {
            return "Paper"
        } else (getRandomInt(0,4)==3) 
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
