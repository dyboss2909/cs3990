import { Button } from './myButton.js';

export class ColorButton extends Button {
    constructor(btnText, btnBgColor, btnTitle, tColor) {
        super(btnText, btnBgColor, btnTitle);
        this.tColor = tColor;
    }

    show() {
        document.write(`
            <button 
                style="background-color: ${this.btnBgColor}; color: ${this.tColor}" 
                title="${this.btnTitle}"
            >
                ${this.btnText}
            </button>
        `);
    }
}