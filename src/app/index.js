import '../style/app.scss';
import Keyboard from './modules/keyboard';
import Words from './modules/words';
import Game from './modules/game';
import Hangman from './modules/hangman';

const wordWrapper = document.getElementsByClassName('word-wrapper')[0];
const exampleList = ["kajakkajak", 'random', 'words', 'for', 'testing'];

const keyboardWrapper = document.getElementsByClassName('keyboard-wrapper')[0];
const enAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const hangmanWrapper = document.getElementsByClassName('hangman-wrapper')[0];

const word = new Words(wordWrapper, exampleList);
const keyboard = new Keyboard(keyboardWrapper, enAlphabet);
const hangman = new Hangman(hangmanWrapper);

const game = new Game(word, keyboard, hangman);


console.log(game);
