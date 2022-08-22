import Avatar from "../src/Avatar";
import BaseAvatar from "./BaseAvatar";

export default class BasePlayer {

    name = '';
    position = 0;
    avatar: BaseAvatar = new BaseAvatar();
    
    constructor(name: string) {
        this.name = name;
    }

    move() {
        this.position++;
    }

    getAvatar() {
        if(!this.avatar) {
            this.avatar = new BaseAvatar();
        }
        return this.avatar;
    }
}