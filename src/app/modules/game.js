import Hangman from "./hangman";

class Game {
  constructor(words, keyboard, hangman) {
    this.words = words;
    this.keyboard = keyboard;
    this.hangman = hangman;
    this.state = 'inprogress';
    this.isLetterPresent = false;
    this.lives = 6;
    this.evaluateKey();
  }

  evaluateKey() {
    this.keyboard.on('keypressed', (value) => {
      for (let i = 0; i < this.words.wordArr.length; i += 1) {
        if (this.words.wordArr[i].value === value) {
          this.words.wordArr[i].state = 'visible';
          this.isLetterPresent = true;
        }
      }
      if (this.isLetterPresent !== true && this.lives > 0) {
        this.lives = this.lives - 1;
        this.hangman.mistakes = this.hangman.mistakes + 1;
        this.hangman.displayMistakes();
      }
      this.isLetterPresent = false;
    });
  }
}
export default Game;
