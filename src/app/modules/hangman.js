class Hangman {
  constructor(view) {
    this.view = view;
    this.mistakes = 0;
  }

  displayMistakes() {
    const bodyPart = document.createElement('div');
    bodyPart.classList.add('body-part');
    bodyPart.classList.add(`part${this.mistakes}`);
    this.view.appendChild(bodyPart);
  }
}


export default Hangman;
