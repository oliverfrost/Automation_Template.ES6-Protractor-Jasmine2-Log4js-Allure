let log4js = require('log4js');

class BasePage {
    constructor(){
        this.logger = log4js.getLogger(this.constructor.name);
        this.logger.setLevel(browser.params.pagesDebugLevel);
    }

    type (element, text) {
        element.clear();
        element.sendKeys(text);
    };
}

module.exports = BasePage;