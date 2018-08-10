import Letter from './letter';

class Words {
  constructor(view, list) {
    this.view = view;
    this.list = list;
    this.wordsArr = [];
    this.processString();
  }

  processString() {
    for (let i = 0; i < this.list.length; i += 1) {
      const strToArr = this.list[i].split('');
      const letterArr = [];
      for (let j = 0; j < strToArr.length; j += 1) {
        const letter = new Letter(strToArr[j], this.view);
        letterArr.push(letter);
      }
      this.wordsArr.push(letterArr);
    }
  }
}
export default Words;
