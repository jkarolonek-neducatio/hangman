import Letter from './letter';

class Words {
  constructor(view, list) {
    this.view = view;
    this.list = list;
    this.wordArr = [];
    this.randomiseWord();
  }

  randomiseWord() {
    const randomPos = Math.floor(Math.random() * (this.list.length));
    const strToArr = this.list[randomPos].split('');
    const letterArr = [];
    for (let j = 0; j < strToArr.length; j += 1) {
      const letter = new Letter(strToArr[j], this.view);
      letterArr.push(letter);
    }
    this.wordArr = letterArr;
  }
}
export default Words;
