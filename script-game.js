  const choiceButtons = document.querySelectorAll('.choice');
    const resultMessage = document.querySelector('.result-message');
    const resetButton = document.querySelector('.reset-button');


    choiceButtons.forEach(button => {
      button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getRandomChoice();
        const result = getGameResult(playerChoice, computerChoice);

        displayResult(playerChoice, computerChoice, result);
      });
    });


    resetButton.addEventListener('click', () => {
      resetGame();
    });


    function getRandomChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }


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


  function displayResult(playerChoice, computerChoice, result) {
    resultMessage.textContent = `Player: ${playerChoice} | Computer: ${computerChoice} | Result: ${result}`;
  }


  function resetGame() {
    resultMessage.textContent = '';
  }
