class Letter {
  constructor(value, container) {
    this.value = value;
    this.container = container;
    this.view = document.createElement('div');
    this.state = 'hidden';
    this.view.classList.add('letter', 'hidden');
    this.container.appendChild(this.view);
  }
}

export default Letter;
