
class InteractiveMenu {
    constructor(containerId, imageContainerId) {
        this.container = document.getElementById(containerId);
        this.imageContainer = document.getElementById(imageContainerId);
        this.isOpen = false;
        this.selectedItem = null;
        this.menuItems = [
            {name: 'Cake', image: 'cake.jpg'},
            {name: 'Donut', image: 'donut.jpg'},
            {name: 'Honey', image: 'honey.jpg'},
            {name: 'Ice Cream', image: 'ice-cream.jpg'}
        ];
        this.render();
        this.setupEventListeners();
    }
    
    /**
     * Renders the menu
     */
    render() {
        const menuElement = document.createElement('div');
        menuElement.className = 'menu';
        
        // Create menu title
        const titleElement = document.createElement('div');
        titleElement.className = 'menu-title';
        titleElement.textContent = 'Sweeties (click me)!';
        
        // Create menu items container
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'menu-items';
        
        // Create menu items
        this.menuItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'menu-item';
            itemElement.textContent = item.name;
            itemElement.dataset.image = item.image;
            
            itemsContainer.appendChild(itemElement);
        });
        
        menuElement.appendChild(titleElement);
        menuElement.appendChild(itemsContainer);
        
        this.container.appendChild(menuElement);
        
        // Store references to elements
        this.menuElement = menuElement;
        this.titleElement = titleElement;
        this.itemsContainer = itemsContainer;
    }
    
    /**
     * Sets up event listeners
     */
    setupEventListeners() {
        // Toggle menu on title click
        this.titleElement.addEventListener('click', () => {
            this.toggleMenu();
        });
        
        // Handle menu item selection
        this.itemsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('menu-item')) {
                this.selectItem(e.target);
            }
        });
    }
    
    /**
     * Toggles the menu open/closed
     */
    toggleMenu() {
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            this.itemsContainer.style.display = 'block';
        } else {
            this.itemsContainer.style.display = 'none';
            this.clearSelection();
        }
    }
    

    selectItem(item) {
        // Clear previous selection
        if (this.selectedItem) {
            this.selectedItem.style.color = '';
        }
        
        // Set new selection
        this.selectedItem = item;
        this.selectedItem.style.color = 'red';
        
        // Display the image
        this.displayImage(item.dataset.image);
    }
    

    displayImage(imageName) {
        this.imageContainer.innerHTML = `<img src="images/${imageName}" alt="Selected item">`;
    }
    
    /**
     * Clears the current selection
     */
    clearSelection() {
        if (this.selectedItem) {
            this.selectedItem.style.color = '';
            this.selectedItem = null;
        }
        
        // Clear the image
        this.imageContainer.innerHTML = '';
    }
}

// Initialize the InteractiveMenu when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const interactiveMenu = new InteractiveMenu('menuContainer', 'imageContainer');
});