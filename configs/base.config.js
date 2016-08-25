exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // place your global varibles here
    params: {
        pagesDebugLevel: 'ERROR',
        helpersDebugLevel: 'ERROR',
        controlsDebugLevel: 'ERROR'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../specs/*.spec.js'],

    suites: {
        login: '../specs/login.spec.js',

        smoke: [
            '../specs/login.spec.js',
            '../specs/replace-with-your-spec.js'
        ]
    },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};