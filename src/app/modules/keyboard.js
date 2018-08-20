import Key from './key';
import EventDispatcher from './event-dispatcher';

class Keyboard extends EventDispatcher {
  constructor(view, alphabet) {
    super();
    this.view = view;
    this.alphabet = alphabet;
    this.keyArr = [];
    this.createButtons(this.alphabet);
  }

  createButtons(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      const key = new Key(arr[i], this.view);
      this.keyArr.push(key);
      key.on('keypressed', (event) => {
        this.emit('keytogame', event);
      });
    }
  }
}

export default Keyboard;
