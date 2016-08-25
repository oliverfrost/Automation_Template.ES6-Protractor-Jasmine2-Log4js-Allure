let Control = require("./control");

class Checkbox extends Control {
    constructor(){
        super();
    }

    isChecked(){
        return this.element.isSelected();
    }

    check(){
        if(!this.isChecked()){
            this.element.click();
        }
    }

    uncheck(){
        if(this.isChecked()){
            this.element.click();
        }
    }
}

module.exports = Checkbox;