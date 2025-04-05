/**
 * ColorButton class
 * Creates a button that changes font/background color of a target element
 */
class ColorButton {
    constructor(color, paletteMenu) {
        this.color = color;
        this.paletteMenu = paletteMenu;
        this.element = this.createElement();
    }
    

    createElement() {
        const button = document.createElement('div');
        button.className = 'color-button';
        button.style.backgroundColor = this.color;
        
        return button;
    }
}

/**
 * PaletteMenu class
 * Manages a collection of ColorButtons and handles their events using delegation
 */
class PaletteMenu {
    constructor(containerId, targetId) {
        this.container = document.getElementById(containerId);
        this.targetElement = document.getElementById(targetId);
        this.colors = [
            '#FF0000', '#00FF00', '#0000FF', 
            '#FFFF00', '#FF00FF', '#00FFFF',
            '#000000', '#FFFFFF', '#FF9900'
        ];
        this.render();
        this.setupEventListeners();
    }


    render() {
        const paletteElement = document.createElement('div');
        paletteElement.className = 'color-palette';
        
        this.colors.forEach(color => {
            const colorButton = new ColorButton(color, this);
            paletteElement.appendChild(colorButton.element);
        });
        
        this.container.appendChild(paletteElement);
    }
    
    /**
     * Sets up event delegation for the color palette
     */
    setupEventListeners() {
        // Using a single event handler on the container instead of individual handlers
        this.container.addEventListener('click', this.handleEvent.bind(this));
        this.container.addEventListener('mouseover', this.handleEvent.bind(this));
        this.container.addEventListener('mouseout', this.handleEvent.bind(this));
    }
    

    handleEvent(event) {
        // Check if the target is a color button
        if (event.target.classList.contains('color-button')) {
            const color = event.target.style.backgroundColor;
            
            switch(event.type) {
                case 'click':
                    this.handleClick(color);
                    break;
                case 'mouseover':
                    this.handleMouseOver(color);
                    break;

            }
        }
    }
    

    handleClick(color) {
        this.targetElement.style.color = color;
    }

    handleMouseOver(color) {
        this.targetElement.style.backgroundColor = color;
    }

}

// Initialize the PaletteMenu when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const paletteMenu = new PaletteMenu('colorPaletteContainer', 'targetBlock');
});