import Key from './key';
import EventDispatcher from './event-dispatcher';

class Keyboard extends EventDispatcher {
  constructor(alphabet) {
    super();
    this.view = document.getElementsByClassName('keyboard-wrapper')[0];
    this.alphabet = alphabet;
    this.keyArr = [];
    this.createButtons(this.alphabet);
    this.reset();
  }

  createButtons(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      const key = new Key(arr[i], this.view);
      this.keyArr.push(key);
      key.on('keypressed', (event) => {
        this.emit('keypressed', event);
      });
    }
  }

  reset() {
    this.keyArr.forEach((item) => {
      item.view.disabled = false;
      item.view.classList.remove('disabled');
    });
  }

  disable() {
    this.keyArr.forEach((item) => {
      item.view.disabled = true;
      item.view.classList.add('disabled');
    });
  }

  enable() {
    this.keyArr.forEach((item) => {
      item.view.disabled = false;
      item.view.classList.remove('disabled');
    });
  }
}

export default Keyboard;
