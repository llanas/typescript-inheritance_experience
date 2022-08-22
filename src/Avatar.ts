import BaseAvatar from "../shared/BaseAvatar";
import Printer from "./Printer";

export default class Avatar extends BaseAvatar {

    printer: Printer;

    constructor() {
        super();
    }

    print() {
        this.printer.print();
    }
}