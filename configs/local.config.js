let _ = require('lodash');

exports.config = _.merge(require('./base.config').config, {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    params: {
        pagesDebugLevel: 'DEBUG',
        helpersDebugLevel: 'DEBUG',
        controlsDebugLevel: 'DEBUG'
    },

    suites: {
        login: '../specs/login.spec.js',

        smoke: [
            '../specs/login.spec.js',
            '../specs/replace-with-your-spec.js'
        ]
    },


    capabilities: {
        'browserName': 'chrome'
    },
});