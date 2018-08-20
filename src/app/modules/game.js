class Game {
  constructor(words, keyboard) {
    this.words = words;
    this.keyboard = keyboard;
    this.state = 'inprogress';
    this.isLetterPresent = false;
    this.lives = 6;
    this.evaluateKey();
  }

  evaluateKey() {
    this.keyboard.on('keytogame', (event) => {
      for (let i = 0; i < this.words.wordArr.length; i += 1) {
        if (this.words.wordArr[i].value === event) {
          this.words.wordArr[i].state = 'visible';
          this.isLetterPresent = true;
        }
      }
      if (this.isLetterPresent !== true) {
        this.lives = this.lives - 1;
      }
      this.isLetterPresent = false;
    });
  }
}
export default Game;
