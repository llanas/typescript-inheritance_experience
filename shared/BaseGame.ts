import BasePlayer from "./BasePlayer";

export default class BaseGame {

    players: BasePlayer[] = [];

    constructor() {}

    addPlayer(player: BasePlayer) {
        this.players.push(player);
    }
}