import '../style/app.scss';
import '../public/images/hal.jpg';
import Game from './modules/game';

const exampleList = ['testing', 'hedge', 'hog'];

const enAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const game = new Game(exampleList, enAlphabet);


console.log(game);
