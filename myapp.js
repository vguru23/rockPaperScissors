function getComputerChoice() {
    options = ['Rock', 'Paper', 'Scissors']
    number = getRandomIntInclusive(0,2)
    const computerChoice = options[number];
    const computerSelection = document.querySelector('#computerimage');
    if (computerChoice == 'Rock') {
        const computerImage = document.createElement('img');
        computerImage.src = 'rock.png';
        computerImage.id = 'computerSelectionImage';
        computerSelection.appendChild(computerImage);
    } else if (computerChoice == 'Paper') {
        const computerImage = document.createElement('img');
        computerImage.src = 'paper.png';
        computerImage.id = 'computerSelectionImage';
        computerSelection.appendChild(computerImage);
    } else {
        const computerImage = document.createElement('img');
        computerImage.src = 'scissor.png';
        computerImage.id = 'computerSelectionImage';
        computerSelection.appendChild(computerImage);
    }
    return computerChoice;
}

function clearSelections() {
    const playerSelection = document.querySelector('#playerimage');
    const computerSelection = document.querySelector('#computerimage');
    playerSelection.innerHTML = ''; // Clear playerSelection div
    computerSelection.innerHTML = ''; // Clear computerSelection div
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
    let roundWinner;    

    if (playerSelection == computerSelection) {
        roundWinner = 0
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        roundWinner = 1
    } else {
        roundWinner = 2
    }

    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');
        if (roundWinner == 1) {
            let newScore = parseInt(playerScore.textContent) + 1;
            playerScore.textContent = newScore.toString();
            
        } else if (roundWinner == 2) {
            let newScore = parseInt(computerScore.textContent) + 1;
            computerScore.textContent = newScore.toString();
            
        }
        if (computerScore.textContent == '5') {
            alert("Game Over! Computer Won!");
            gameOver();
        } else if (playerScore.textContent == '5') {
            alert("GameOver! You won!")
            gameOver();
        }
}




function game() {
    playerWins = 0
    computerWins = 0
    

        const playerChoices = document.querySelectorAll('.buttonIcon');
        const playerSelection = document.querySelector('#playerimage');
        playerChoices.forEach(button => {
            button.addEventListener('click', function(e) {
              clearSelections();
              const targetId = e.currentTarget.id;
              
                if (targetId == "rockPlayer") {
                    const playerImage = document.createElement('img');
                    playerImage.src = 'rock.png';
                    playerImage.id = 'playerSelectionImage';
                    playerSelection.appendChild(playerImage);
                    const computerChoice = getComputerChoice();
                    const playerChoice = "rock";
                    console.log(computerChoice);
                    console.log(playerChoice);
                    playRound(playerChoice,computerChoice);
                } else if (targetId == "paperPlayer") {
                    const playerImage = document.createElement('img');
                    playerImage.src = 'paper.png';
                    playerImage.id = 'playerSelectionImage';
                    playerSelection.appendChild(playerImage);
                    const computerChoice = getComputerChoice();
                    const playerChoice = "paper";
                    console.log(computerChoice);
                    console.log(playerChoice);
                    playRound(playerChoice,computerChoice);
                } else {
                    const playerImage = document.createElement('img');
                    playerImage.src = 'scissor.png';
                    playerImage.id = 'playerSelectionImage';
                    playerSelection.appendChild(playerImage) ;
                    const computerChoice = getComputerChoice();
                    const playerChoice = "scissors";
                    console.log(computerChoice);
                    console.log(playerChoice);
                    playRound(playerChoice,computerChoice);
                }
            })
        })

        
    
    
}

function gameOver() {
    window.location.reload();
}

game()

