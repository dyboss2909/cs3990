import { createButtons, arrButtons, displayButtonsWithDelay } from './myFunctions.js';
import { ColorButton } from './myColorButton.js';

createButtons();
displayButtonsWithDelay();

// Schedule ColorButton after regular buttons
const colorBtn = new ColorButton(
    'Color Button',
    '#9C27B0',
    'Purple color button with white text',
    'white'
);
setTimeout(() => colorBtn.show(), arrButtons.length * 3000);

// Close HTML
setTimeout(() => document.write('</body></html>'), (arrButtons.length + 1) * 3000);