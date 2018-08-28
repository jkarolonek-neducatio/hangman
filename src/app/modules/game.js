class Game {
  constructor(words, keyboard, hangman) {
    this.words = words;
    this.keyboard = keyboard;
    this.hangman = hangman;
    this.state = 'inprogress';
    this.isLetterPresent = false;
    this.lives = 6;
    this.correctLetters = 0;
    this.evaluateKey();
  }

  evaluateKey() {
    this.keyboard.on('keypressed', (value) => {
      for (let i = 0; i < this.words.wordArr.length; i += 1) {
        const letter = this.words.wordArr[i];
        if (letter.value === value) {
          letter.state = 'visible';
          letter.view.classList.remove('hidden');
          letter.view.classList.add('visible');
          this.correctLetters = this.correctLetters + 1;
          this.isLetterPresent = true;
        }
      }

      this.checkForLetter();
      this.checkIfWon();
    });
  }

  checkForLetter() {
    if (this.isLetterPresent !== true && this.lives > 0) {
      this.lives = this.lives - 1;
      this.hangman.mistakes = this.hangman.mistakes + 1;
      this.hangman.displayMistakes();
    }
    this.isLetterPresent = false;
  }

  checkIfWon() {
    if (this.correctLetters === this.words.wordArr.length) {
      alert('You win!');
      while (this.words.view.firstChild) {
        this.words.view.removeChild(this.words.view.firstChild);
      }

      this.words.randomiseWord();

      this.keyboard.keyArr.forEach((element) => {
        element.view.disabled = false;
      });
      this.correctLetters = 0;
      console.log(this.words.wordArr);
    }
  }
}
export default Game;
