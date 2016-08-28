let log4js = require('log4js');

class Control {
    constructor(locator) {
        if (locator) {
            this.__control = $(locator);
        } else {
            throw  new Error("Element locator not specified!");
        }


        this.logger = log4js.getLogger(this.constructor.name);
        this.logger.setLevel(browser.params.controlsDebugLevel);
    }

    get element() {
        return this.__control;
    }

    get displayed() {
        return this.element.isDisplayed();
    }
}

module.exports = Control;