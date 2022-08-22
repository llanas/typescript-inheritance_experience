import BasePlayer from "../shared/BasePlayer";
import Avatar from "./Avatar";

export default class Player extends BasePlayer {

    socketNumber = 0;
    avatar: Avatar;

    constructor(name: string) {
        super(name);
    }

    move() {
        super.move();
        this.save()
        console.log(`${this.name} has moved`);
    }

    save() {
        console.log(`Saving ${this.name} position in Database`);
    }
}