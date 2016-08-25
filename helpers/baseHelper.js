let log4js = require('log4js');

class BaseHelper {
    constructor(){
        this.logger = log4js.getLogger(this.constructor.name);
        this.logger.setLevel(browser.params.helpersDebugLevel);
    }
}

module.exports = BaseHelper;