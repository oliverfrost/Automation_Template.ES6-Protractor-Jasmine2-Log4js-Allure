let Control = require("./control");

class Select extends Control {
    constructor(locator) {
        super(locator);
    }

    get value() {
        return this.element.$('option:checked').getText();
    }

    set value(value) {
        return this.element.$(`option[label="${value}"]`).click()
    }
}

module.exports = Select;