import EventDispatcher from './event-dispatcher';

class Key extends EventDispatcher {
  constructor(value, container) {
    super();
    this.value = value;
    this.container = container;
    this.view = document.createElement('button');
    this.view.classList.add('key');
    this.view.innerHTML = this.value;
    this.container.appendChild(this.view);
    this.view.addEventListener('click', this.clickHandler);
  }

  clickHandler = () => {
    this.view.disabled = true;
    this.emit('keypressed', this.value);
  }
}

export default Key;
