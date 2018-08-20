import EventDispatcher from './event-dispatcher';

class Key extends EventDispatcher {
  constructor(value, container) {
    super();
    this.value = value;
    this.container = container;
    this.view = document.createElement('button');
    // this.state = 'enabled';
    this.view.classList.add('key');
    this.view.innerHTML = this.value;
    this.container.appendChild(this.view);
    this.view.addEventListener('click', this.clickHandler);
  }

  clickHandler = () => {
    this.emit('keypressed', this.value);
    this.view.disabled = true;
  }
}

export default Key;
