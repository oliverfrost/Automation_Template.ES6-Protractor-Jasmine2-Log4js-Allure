let BasePage = require('./basePage');

class LoginPage extends BasePage {
    constructor() {
        super();
        this.__loginInput = $('/* Place your selector here */');
        this.__passwordInput = $('/* Place your selector here */');
        this.__submitButton = $('/* Place your selector here */');
    }

    login(login, password) {
        this.logger.info(`Authorizing as: ${login} / ${password}`);
        this.typeLogin(login);
        this.typePassword(password);
        this.submitCredentials();
    }

    typeLogin(login) {
        this.type(this.__loginInput, login);
    }

    typePassword(password) {
        this.type(this.__passwordInput, password);
    }

    submitCredentials() {
        this.__submitButton.click();
    }
}

module.exports = new LoginPage();