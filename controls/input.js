let Control = require("./control");

class Input extends Control {
    constructor(locator) {
        super(locator);
    }

    /**
     * A promise that will be resolved with the attribute's value.
     * The returned value will always be either a string or null
     * Usage example: input.value.then(x => return x)
     * @returns {webdriver.promise.Promise<string[]>}
     */
    get value() {
        return this.element.getAttribute("value");
    }

    /**
     * Sets specified text into the element.
     * Usage example: input.value = 'Some text';
     * @param text{String} - Char sequence that will be sent to the element
     */
    set value(text) {
        this.element.clear();
        this.element.sendKeys(text);
    }
}

module.exports = Input;