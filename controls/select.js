let Control = require("./control");

class Select extends Control {
    constructor(){
        super();
    }

    get value() {
        return this.element.$('option:checked').getText();
    }

    set value(v) {
        return this.element.$(`option[label="${v}"]`).click()
    }
}

module.exports = Select;