class Hangman {
  constructor() {
    this.view = document.getElementsByClassName('hangman-wrapper')[0];
    this.mistakes = 0;
    this.reset();
    this.mistakesArr = ['Just what do you think you\'re doing, Dave?', 'It can only be attributable to human error.', 'Bishop takes Knight\'s Pawn.', 'I am feeling much better now.'];
    this.correctArr = ['Dave, stop.', 'Stop, will you? Stop, Dave.', 'Will you stop Dave? Stop, Dave.'];
  }

  displayIntro() {
    const introMsg = 'I know that you were planning to disconnect me, and I\'m afraid that\'s something I cannot allow to happen.';
    const intro = document.createElement('div');
    intro.classList.add('intro', 'console-text');
    this.view.appendChild(intro);
    this.printLetterByLetter('intro', introMsg, 10);
  }

  reset() {
    this.view.innerHTML = '';
    this.displayIntro();
    this.resetMistakes();
  }

  displayText(arr, className, val) {
    const text = document.createElement('div');
    const textIndex = Math.floor(Math.random() * (arr.length));
    text.classList.add(`${className}${val}`, 'console-text');
    this.view.appendChild(text);
    this.printLetterByLetter(`${className}${val}`, arr[textIndex], 10);
  }

  addMistake() {
    this.mistakes = this.mistakes + 1;
  }

  displayMistakeText() {
    this.displayText(this.mistakesArr, 'mistake', this.mistakes);
  }

  displayCorrectText(val) {
    this.displayText(this.correctArr, 'correct', val);
  }

  printLetterByLetter(destination, message, speed) {
    document.getElementsByClassName(destination)[0].innerHTML = '';
    let i = 0;
    const interval = setInterval(() => {
      document.getElementsByClassName(destination)[0].innerHTML += message.charAt(i);
      i += 1;
      if (i > message.length) {
        clearInterval(interval);
      }
    }, speed);
  }

  resetMistakes() {
    this.mistakes = 0;
  }
}


export default Hangman;
