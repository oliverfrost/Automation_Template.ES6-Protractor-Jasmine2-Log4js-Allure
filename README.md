# Template for Automated Testing Project: [ES6 + Protractor + Jasmine2 + Log4j + Allure]


##**Installation:**

Clone repository:

```sh
$ git clone https://github.com/oliverfrost/Automation_Template.ES6-Protractor-Jasmine2-Log4js-Allure.git
```

Switch to the directory:

```sh
$ cd ES6-protractor-template
```

Install project dependencies:

```sh
$ npm install
```

Install protractor globally:

```sh
$ npm install -g protractor
```

Update web driver version:

```sh
$ webdriver-manager update
```

Launch web driver server:

```sh
$ webdriver-manager start
```

Run tests:

```sh
$ protractor configs/local.conf.js

```


Or to run a test suite type:

```sh
$ protractor configs/local.conf.js --suite suite_name
```

Suites names can be found in [config/conf.js][confjs] file under 'suites' section.



## Allure Report

1. Follow [this link][allure-cli] to find out how to install Allure Command Line tool.
2. Run any test.
3. Type:

```sh
$ allure generate directory-with-results/
```

And when report is generate successfully do:

```sh
$ allure report open
```



[allure-cli]: <http://wiki.qatools.ru/display/AL/Allure+Commandline>
[confjs]: <https://github.com/oliverfrost/Automation_Template.ES6-Protractor-Jasmine2-Log4js-Allure/blob/master/configs/local.config.js>



