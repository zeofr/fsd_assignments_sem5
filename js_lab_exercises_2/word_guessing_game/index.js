const wordLetters = ['F', 'O', 'X'];
const guessedLetters = Array(wordLetters.length).fill('_');
const guessedAll = new Set();
let reward = 0;
let hangmanState = 0;

function guessLetter(letter) {
  const guess = letter.toUpperCase();
  if (guessedAll.has(guess)) return console.log('Already guessed.');
  guessedAll.add(guess);

  let found = 0;
  wordLetters.forEach((ch, idx) => {
    if (ch === guess) {
      guessedLetters[idx] = ch;
      found += 1;
    }
  });

  const rewardChange = Math.floor(Math.random() * 10) + 1;
  if (found) {
    reward += rewardChange * found;
    console.log(`Congrats, found ${guess}! ${guessedLetters.join('')}, reward: $${reward}`);
  } else {
    reward -= rewardChange;
    hangmanState += 1;
    console.log(`Nope. ${guessedLetters.join('')}, reward: $${reward}, hangman: ${hangmanState}/6`);
  }

  if (!guessedLetters.includes('_')) {
    console.log(`You win! Word: ${guessedLetters.join('')}. Final reward: $${reward}`);
  } else if (hangmanState >= 6) {
    console.log('You lost. Hangman complete.');
  }
}

// Test
guessLetter('F');
guessLetter('O');
guessLetter('X');
