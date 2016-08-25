let LoginPage = require('../pages/loginPage');
let Checkbox = require('../controls/checkbox');

describe('CONTROLS TEST', function(){

        it('Sign in as User', function(){


            browser.get("http://localhost/ang.html");

            //let input1 = $('#first');
           //let input2 = $('#second');

            let input1 = new Checkbox('#first');
            let input2 = new Checkbox('#second');


            input1.uncheck();
            input1.check();
            input2.check();
           //  browser.pause();

            expect(input1.isChecked()).toBeFalsy();
            expect(input2.isChecked()).toBeTruthy();

        });
});