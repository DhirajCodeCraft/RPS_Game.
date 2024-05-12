function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomIndex];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice ('rock', 'paper', 'scissors')");

    if (!['rock', 'paper', 'scissors'].includes(humanChoice.toLowerCase())) {
        alert("Invalid choice! Please enter 'rock', 'paper', or 'scissors'");
        return getHumanChoice(); 
    }

    return humanChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const rounds = 5; 

    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        function playRound(humanChoice, computerChoice) {

            const humanSelection = humanChoice.toLowerCase();
            const computerSelection = computerChoice.toLowerCase();

            if (humanSelection === computerSelection) {
                return "It's a tie! Both chose " + humanSelection;
            } else if (
                (humanSelection === 'rock' && computerSelection === 'paper') || 
                (humanSelection === 'paper' && computerSelection === 'scissors') ||
                (humanSelection === 'scissors' && computerSelection === 'rock')
            ) {
                return "You win! " + humanSelection + " beats " + computerSelection;
            } else {
                return "You lose! " + computerSelection + " beats " + humanSelection;
            }
        }

        const result = playRound(humanSelection, computerSelection);
        console.log(result); 

        if (result.includes('win')) {
            humanScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }

    console.log("Game Over!");
    console.log("Human Score:", humanScore);
    console.log("Computer Score:", computerScore);
}

playGame();
