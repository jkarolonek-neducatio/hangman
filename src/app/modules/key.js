class Key {
  constructor(value, container) {
    this.value = value;
    this.container = container;
    this.view = document.createElement('button');
    this.state = 'enabled';
    this.view.classList.add('key')
    this.view.innerHTML = this.value;
    this.container.appendChild(this.view);
  }
}

export default Key;
