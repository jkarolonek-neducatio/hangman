import Letter from './letter';

class Words {
  constructor(view, list) {
    this.view = view;
    this.list = list;
    this.wordArr = [];
    this.randomiseWord();
  }

  randomiseWord() {
    this.wordArr = [];
    const randomPos = Math.floor(Math.random() * (this.list.length));
    const strToArr = this.list[randomPos].split('');
    this.wordArr = strToArr.map(letter => new Letter(letter, this.view))
    this.list.splice(randomPos, 1);
    console.log(this.list);
    console.log(this.wordArr);
  }
}
export default Words;
