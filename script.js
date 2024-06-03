document.addEventListener('DOMContentLoaded', () => {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const computerChoice = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * computerChoice.length);
        return computerChoice[randomIndex];
    }

    function playRound(humanChoice, computerChoice) {
        const humanSelection = humanChoice.toLowerCase();
        const computerSelection = computerChoice.toLowerCase();

        if (humanSelection === computerSelection) {
            return "It's a tie! Both chose " + humanSelection;
        } else if (
            (humanSelection === 'rock' && computerSelection === 'scissors') || 
            (humanSelection === 'paper' && computerSelection === 'rock') ||
            (humanSelection === 'scissors' && computerSelection === 'paper')
        ) {
            humanScore++;
            return "You win! " + humanSelection + " beats " + computerSelection;
        } else {
            computerScore++;
            return "You lose! " + computerSelection + " beats " + humanSelection;
        }
    }

    function updateResults(result) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.textContent = result;

        const scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Current Score - You: ${humanScore}, Computer: ${computerScore}`;

        if (humanScore === 5 || computerScore === 5) {
            const winner = humanScore === 5 ? 'You' : 'Computer';
            resultsDiv.textContent += ` ${winner} win the game!`;
            disableButtons();
        }
    }

    function handleButtonClick(event) {
        const humanSelection = event.target.id;
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        updateResults(result);
    }

    function disableButtons() {
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }

    document.getElementById('rock').addEventListener('click', handleButtonClick);
    document.getElementById('paper').addEventListener('click', handleButtonClick);
    document.getElementById('scissors').addEventListener('click', handleButtonClick);
});
