/* eslint-disable no-param-reassign */
import Words from './words';
import Keyboard from './keyboard';
import Hangman from './hangman';

class Game {
  constructor(list, alphabet) {
    this.list = list;
    this.alphabet = alphabet;
    this.words = new Words(this.list);
    this.keyboard = new Keyboard(this.alphabet);
    this.hangman = new Hangman();
    this.isLetterPresent = false;
    this.lives = 6;
    this.tries = document.createElement('div');
    this.correctLetters = 0;
    this.evaluateKey();
    this.displayTries();
  }

  evaluateKey() {
    this.keyboard.on('keypressed', (value) => {
      for (let i = 0; i < this.words.getWordLength(); i += 1) {
        const letter = this.words.getWord()[i];
        if (letter.value === value) {
          letter.state = 'visible';
          letter.view.classList.remove('hidden');
          letter.view.classList.add('visible');
          letter.view.innerHTML = this.words.getWord()[i].value;
          this.correctLetters = this.correctLetters + 1;
          this.hangman.displayCorrectText(this.correctLetters);
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
      this.hangman.addMistake();
      this.hangman.displayMistakeText();
      this.displayTries();
    }
    this.isLetterPresent = false;
  }

  checkIfWon() {
    const nextWord = document.createElement('button');
    nextWord.classList.add('next-word');
    nextWord.innerHTML = 'NEXT SEQUENCE';
    if (this.correctLetters === this.words.getWordLength()) {
      this.words.wordView().appendChild(nextWord);
      nextWord.addEventListener('click', this.onClickNextWord);
      this.keyboard.disable();
    }
    if (this.correctLetters === this.words.getWordLength() && this.words.getListLength() === 0) {
      this.words.wordView().removeChild(nextWord);
      nextWord.removeEventListener('click', this.onClickNextWord);
      this.gameFinished('Why did you have to do that Dave?');
      this.keyboard.disable();
    } else if (this.lives === 0) {
      nextWord.removeEventListener('click', this.onClickNextWord);
      this.gameFinished('I am afraid I cannot let you do that Dave.');
      this.keyboard.disable();
    }
  }

  gameFinished(message) {
    this.overlay = document.createElement('div');
    const msg = document.createElement('div');
    this.restart = document.createElement('button');

    this.overlay.classList.add('overlay');
    msg.classList.add('msg');
    this.restart.classList.add('restart');

    document.body.appendChild(this.overlay);
    this.overlay.classList.add('animate');
    this.overlay.appendChild(msg);
    this.overlay.appendChild(this.restart);

    msg.innerHTML = message;
    this.restart.innerHTML = 'Restart game';
    this.restart.addEventListener('click', this.onClickRestart);
  }

  onClickRestart = () => {
    document.body.removeChild(this.overlay);
    this.reset();
    this.restart.removeEventListener('click', this.onClickRestart);
  };

  onClickNextWord = () => {
    while (this.words.wordView().firstChild) {
      this.words.wordView().removeChild(this.words.wordView().firstChild);
    }

    this.words.randomiseWord();

    this.keyboard.enable();
    this.correctLetters = 0;
    this.lives = 6;
    this.hangman.reset();
    this.displayTries();
  };

  displayTries() {
    this.tries.classList.add('tries');
    this.words.wordView().appendChild(this.tries);
    this.tries.innerHTML = '';
    this.tries.innerHTML = `Tries left: ${this.lives}`;
  }


  reset() {
    this.words.reset();
    this.keyboard.reset();
    this.hangman.reset();

    this.correctLetters = 0;
    this.lives = 6;
    this.displayTries();
  }
}
export default Game;
