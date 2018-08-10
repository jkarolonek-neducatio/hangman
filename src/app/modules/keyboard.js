import Key from './key';

class Keyboard {
  constructor(view, alphabet) {
    this.view = view;
    this.alphabet = alphabet;
    this.keyArr = [];
    this.createButtons(this.alphabet);
  }

  createButtons(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      const key = new Key(arr[i], this.view);
      this.keyArr.push(key);
    }
  }
}

export default Keyboard;
