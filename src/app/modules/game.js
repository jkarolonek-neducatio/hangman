/* eslint-disable no-param-reassign */
class Game {
  constructor(words, keyboard, hangman) {
    this.words = words;
    this.keyboard = keyboard;
    this.hangman = hangman;
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
          letter.view.innerHTML = this.words.wordArr[i].value;
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
    const nextWord = document.createElement('button');
    nextWord.innerHTML = 'NEXT SEQUENCE';
    if (this.correctLetters === this.words.wordArr.length) {
      this.words.view.appendChild(nextWord);
      nextWord.addEventListener('click', this.onClickNextWord);
      this.disableKeyboard();
    }
    if (this.correctLetters === this.words.wordArr.length && this.words.list.length === 0) {
      this.words.view.removeChild(nextWord);
      nextWord.removeEventListener('click', this.onClickNextWord);
      this.gameFinished('Why did you have to do that Dave?');
      this.disableKeyboard();
    } else if (this.lives === 0) {
      nextWord.removeEventListener('click', this.onClickNextWord);
      this.gameFinished('I am afraid I cannot let you do that Dave.');
      this.disableKeyboard();
    }
  }

  gameFinished(message) {
    this.overlay = document.createElement('div');
    const msg = document.createElement('span');
    this.restart = document.createElement('button');

    this.overlay.classList.add('overlay');
    msg.classList.add('msg');
    this.restart.classList.add('restart');

    document.body.appendChild(this.overlay);
    this.overlay.appendChild(msg);
    this.overlay.appendChild(this.restart);

    msg.innerHTML = message;
    this.restart.innerHTML = 'Restart game';
    this.restart.addEventListener('click', this.onClickRestart);
  }

  onClickRestart = () => {
    document.body.removeChild(this.overlay);
    this.restart.removeEventListener('click', this.onClickRestart);
  };

  onClickNextWord = () => {
    while (this.words.view.firstChild) {
      this.words.view.removeChild(this.words.view.firstChild);
    }

    this.words.randomiseWord();

    this.keyboard.keyArr.forEach((element) => {
      element.view.disabled = false;
      element.view.classList.remove('disabled');
    });
    this.correctLetters = 0;
  };

  disableKeyboard() {
    this.keyboard.keyArr.forEach((element) => {
      element.view.disabled = true;
      element.view.classList.add('disabled');
    });
  }
}
export default Game;
