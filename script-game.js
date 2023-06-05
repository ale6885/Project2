// Get the choice buttons, result message element, and reset button
const choiceButtons = document.querySelectorAll('.choice');
const resultMessage = document.querySelector('.result-message');
const resetButton = document.querySelector('.reset-button');

// Add event listeners for choice buttons
choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getRandomChoice();
    const result = getGameResult(playerChoice, computerChoice);

    displayResult(playerChoice, computerChoice, result);
  });
});

// Add event listener for reset button
resetButton.addEventListener('click', () => {
  resetGame();
});

// Function to get a random computer choice
function getRandomChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the game result
function getGameResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

// Function to display the game result
function displayResult(playerChoice, computerChoice, result) {
  resultMessage.textContent = `Player: ${playerChoice} | Computer: ${computerChoice} | Result: ${result}`;
}

// Function to reset the game
function resetGame() {
  resultMessage.textContent = '';
}
