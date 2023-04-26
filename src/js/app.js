//console.log('app worked')
import Game, {readGameSaving as loadGame, writeGameSaving as saveGame} from './game.js';
const game = new Game();
game.start();