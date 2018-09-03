class Letter {
  constructor(value, container) {
    this.value = value;
    this.container = container;
    this.view = document.createElement('div');
    this.state = 'hidden';
    this.view.classList.add('letter', 'hidden');
    // this.view.innerHTML = this.value;
    this.container.appendChild(this.view);
  }
}

export default Letter;
