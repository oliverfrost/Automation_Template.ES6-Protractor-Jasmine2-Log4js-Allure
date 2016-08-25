let Control = require("./control");

class Input extends Control {
    constructor(){
        super();
    }

    get value() {
        return this.element.getAttribute("value")
    }

    set value(v) {
        this.element.clear().sendKeys(v)
    }
}

module.exports = Input;