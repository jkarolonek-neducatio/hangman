class Hangman {
  constructor(view) {
    this.view = view;
    this.mistakes = 0;
    this.displayIntro();
  }

  displayMistakes() {
    const bodyPart = document.createElement('div');
    bodyPart.classList.add('body-part');
    bodyPart.classList.add(`part${this.mistakes}`);
    this.view.appendChild(bodyPart);
  }

  displayIntro() {
    const introMsg = 'Welcome to HAL 9000 internal interface, input correct sequence to stop the AI protocol';
    const intro = document.createElement('div');
    intro.classList.add('intro', 'console-text');
    this.view.appendChild(intro);
    this.printLetterByLetter('intro', introMsg, 100);
  }

  printLetterByLetter(destination, message, speed){
    let i = 0;
    const interval = setInterval(() => {
      document.getElementsByClassName(destination)[0].innerHTML += message.charAt(i);
      i += 1;
      if (i > message.length) {
        clearInterval(interval);
      }
    }, speed);
  }
}


export default Hangman;
