let Control = require("./control");

class Checkbox extends Control {
    constructor(locator) {
        super(locator);
    }

    /** Defines if checkbox is selected or not.
     * A promise that will be resolved with whether this element is currently selected.
     * @returns {webdriver.promise.Promise.<boolean>}
     */
    isChecked() {
        return this.element.isSelected();
    }

    check() {
        if (!this.isChecked()) {
            this.logger.debug(`Checking element: ${this.element.locator()}.`);
            this.element.click();
        }
    }

    uncheck() {
        if (this.isChecked()) {
            this.logger.debug(`Unchecking element: ${this.element.locator()}.`);
            this.element.click();
        }
    }
}

module.exports = Checkbox;