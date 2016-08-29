let Allure = require('allure-js-commons'),
    Runtime = require("allure-js-commons/runtime");

class AllureReporter {
    constructor() {
        this.allure = new Allure();

    }

    get timestamp() { return Date.now() }

    suiteStarted(suite) {
        this.allure.startSuite(suite.description, this.timestamp);
    }

    specStarted(spec) {
        this.allure.startCase(spec.description, this.timestamp);
    }

    specDone(spec) {
        this.allure.endCase(spec.status, '', this.timestamp)
    }

    suiteDone(suite) {
        this.allure.endSuite(this.timestamp);
    }

    startStep(stepName) {
        this.allure.startStep(stepName, this.timestamp)
    }

    endStep(status) {
        this.allure.endStep(status, this.timestamp)
    }

    isPromise(obj) {
        return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
    };

    wrap(page, name) {
        var _page = page,
            _name = name,
            that = this;
        return function() {
            var args = Array.prototype.slice.call(arguments, 0),
                stepName = _name,
                status = 'passed',
                result;
            if (args.length) {
                stepName += "[";
                for (var i = 0; i < args.length; i++) {
                    if (typeof args[i] === 'object')
                        stepName += args[i].toString();
                    else
                        stepName += args[i];
                    if (i < args.length - 1)
                        stepName += ", ";
                }
                stepName += "]";
            }
            allure.startStep(stepName);
            try {
                _page[name](args);
            }
            catch(error) {
                status = 'broken';
                throw error;
            }
            finally {
                if(that.isPromise(result)) {
                    result.then(
                        that.endStep('passed'),
                        that.endStep('broken')
                    );
                } else {
                    that.endStep(status);
                }
            }
            return result;
        };
    }

    wrapPage(_page) {
        var page = {};
        Object.getOwnPropertyNames(Object.getPrototypeOf(_page))
            .filter(f=>f!='constructor').forEach(p=>page[p]=this.wrap(_page, p));
        return page;
    }

    takeScreenshot(name, done) {
        var _name = name || "Screenshot",
            _allure = this.allure;
        browser.takeScreenshot().then(function (png) {
            _allure.addAttachment(_name, new Buffer(png, 'base64'), 'image/png');
            done();
        })
    }
}

module.exports = new AllureReporter();