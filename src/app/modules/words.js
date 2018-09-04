import Letter from './letter';

class Words {
  constructor(list) {
    this.view = document.getElementsByClassName('word-wrapper')[0];
    this.list = list;
    this.reset();
  }

  randomiseWord() {
    this.wordArr = [];
    const randomPos = Math.floor(Math.random() * (this.currentList.length));
    const strToArr = this.currentList[randomPos].split('');
    this.wordArr = strToArr.map(letter => new Letter(letter, this.view));
    this.currentList.splice(randomPos, 1);
  }

  reset() {
    this.view.innerHTML = '';
    this.currentList = [...this.list];
    this.wordArr = [];
    this.randomiseWord();
  }

  getListLength() {
    return this.currentList.length;
  }

  getWord() {
    return this.wordArr;
  }

  getWordLength() {
    return this.wordArr.length;
  }

  wordView() {
    return this.view;
  }

}
export default Words;
