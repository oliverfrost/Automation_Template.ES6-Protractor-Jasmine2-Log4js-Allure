let log4js = require('log4js');

class Control {
    constructor(locator) {
        this.__control = $(locator);

        this.logger = log4js.getLogger(this.constructor.name);
        this.logger.setLevel(browser.params.controlsDebugLevel);
    }

    get element() {
        return this.__control
    }

    get displayed() {
        return this.element.isDisplayed()
    }
}

module.exports = Control;