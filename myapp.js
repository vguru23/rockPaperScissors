function getComputerChoice() {
    options = ['Rock', 'Paper', 'Scissors']
    number = getRandomIntInclusive(0,2)
    console.log(options[number])
    return(options[number])

}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
/* possible combinations
rock+rock || paper + paper || scissors + scissors
rock+paper
rock+scissors
paper+scissors

all the ways player could win:

player: rock   computer: scissors
player: paper  computer: rock
player: scissors computer: paper
*/
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()    

    if (playerSelection == computerSelection) {
        console.log("You tied")
        return 0
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log("You Win! " + playerSelection + " beats " + computerSelection)
        return 1
    } else {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection)
        return 2
    }

}

function game() {
    playerWins = 0
    computerWins = 0
    for (i = 0; i < 5; i++) {
        const prompt=require("prompt-sync")({sigint:true});

        let playerSelection = prompt("Type Rock, Paper, or Scissors to play!")
        roundWinner = playRound(playerSelection,getComputerChoice())
        if (roundWinner == 1) {
            playerWins += 1
        } else if (roundWinner == 2) {
            computerWins += 1
        }
    }
    if (playerWins > computerWins) {
        console.log("You Win overall")
    } else if (computerWins > playerWins) {
        console.log("You Lose overall!")
    } else {
        console.log("You tied overall")
    }
}

game()
