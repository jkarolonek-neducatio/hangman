import '../style/app.scss';
import '../public/images/hal.jpg';
import data from '../public/json/data.json';
import Game from './modules/game';

fetch(data)
  .then(response => response.json())
  .then((data) => {
    const game = new Game(data);
  });
