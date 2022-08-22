import BaseGame from "../shared/BaseGame";
import Player from "./Player";

export default class Game extends BaseGame {

    players: Player[] = [];

    constructor() {
        super()
    }

    moveAllPlayer() {
        this.players.forEach(player => {
            player.move()
            player.avatar.print();
        });
    }
}