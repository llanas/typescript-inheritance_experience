import Game from "./src/Game";
import Player from "./src/Player";

const game = new Game();

const player1 = new Player('Bob');
const player2 = new Player('Alice');

game.addPlayer(player1);
game.addPlayer(player2);

game.moveAllPlayer();