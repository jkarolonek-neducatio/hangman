import '../style/app.scss';
import Keyboard from './modules/keyboard';
import Words from './modules/words';
import Game from './modules/game';

const wordWrapper = document.getElementsByClassName('word-wrapper')[0];
const exampleList = ["kajakkajak", 'random', 'words', 'for', 'testing'];
const keyboardWrapper = document.getElementsByClassName('keyboard-wrapper')[0];
const enAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const word = new Words(wordWrapper, exampleList);
const keyboard = new Keyboard(keyboardWrapper, enAlphabet);

const game = new Game(word, keyboard);
console.log(game);