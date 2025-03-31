import { arrTexts, arrColors } from './myArrays.js';
import { Button } from './myButton.js';

export const arrButtons = [];

export function createButtons() {
    arrTexts.forEach((text, index) => {
        const color = arrColors[index];
        const title = `${text} is shown on ${color} background`;
        arrButtons.push(new Button(text, color, title));
    });
}

export function displayButtonsWithDelay() {
    document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>Advanced Buttons</title></head>
        <body>
    `);

    arrButtons.forEach((button, index) => {
        setTimeout(() => button.show(), index * 3000);
    });
}