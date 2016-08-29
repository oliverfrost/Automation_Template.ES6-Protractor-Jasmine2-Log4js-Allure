let log4js = require('log4js');

/** Class represents base for all other Helper classes */
class BaseHelper {
    constructor(){
        this.logger = log4js.getLogger(this.constructor.name);
        this.logger.setLevel(browser.params.helpersDebugLevel);
    }
}

module.exports = BaseHelper;