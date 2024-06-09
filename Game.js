const answer = Math.floor(Math.random() * 10) + 1;
let guessesLeft = 3;

document.getElementById('guessButton').addEventListener('click', function() {
  const guess = parseInt(document.getElementById('guessInput').value);
  
  if (isNaN(guess) || guess < 1 || guess > 10) {
    alert(' enter a valid number between 1 and 10 :)');
    return;
  }

  guessesLeft--;
  
  if (guess === answer) {
    alert('Congratulations! You guessed  correct :)');
    disableInput();
  } else if (guessesLeft === 0) {
    alert(`Sorry, you've run out of guesses. The correct answer was ${answer}.`);
    disableInput();
  } else {
    updateHint(guess);
    updateBackgroundColor(guess);
  }
});

function disableInput() {
  document.getElementById('guessInput').disabled = true;
  document.getElementById('guessButton').disabled = true;
}

function updateHint(guess) {
  const hintElement = document.getElementById('hint');
  if (guess < answer) {
    hintElement.textContent = 'Try a higher number :)';
  } else {
    hintElement.textContent = 'Try a lower number :)';
  }
}

function updateBackgroundColor(guess) {
  const body = document.body;
  const diff = Math.abs(answer - guess);
  const intensity = 25 * (3 - guessesLeft);
  const color = `rgba(255, ${intensity}, ${intensity}, 0.8)`;
  body.style.backgroundColor = color;
}
