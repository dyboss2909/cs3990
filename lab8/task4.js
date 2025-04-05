/**
 * Fruit class
 * Creates a fruit item with name and color
 */
class Fruit {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    
    /**
     * Renders the fruit item into a list
     */
    show() {
        const fruitsList = document.querySelector('#fruits ul');
        
        const listItem = document.createElement('li');
        listItem.className = 'fruit-item';
        listItem.style.backgroundColor = this.color;
        listItem.dataset.color = this.color;
        listItem.innerHTML = `<span>${this.name}</span>`;
        
        fruitsList.appendChild(listItem);
        
        // Set text color for better contrast
        if (this.color === 'blue' || this.color === 'green' || this.color === 'red') {
            listItem.style.color = 'white';
        }
    }
}

/**
 * RatedFruit class
 * Extends Fruit with rating functionality
 */
class RatedFruit extends Fruit {
    constructor(name, color, rating) {
        super(name, color);
        this.rating = rating || 3; // Default rating if none provided
    }
    
    /**
     * Renders the rated fruit item into a list
     */
    show() {
        const fruitsList = document.querySelector('#fruits ul');
        
        const listItem = document.createElement('li');
        listItem.className = 'fruit-item';
        listItem.style.backgroundColor = this.color;
        listItem.dataset.color = this.color;
        
        // Create stars for rating
        let starsHtml = '<div class="star-rating">';
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= this.rating ? 'star active' : 'star';
            starsHtml += `<span class="${starClass}" data-rating="${i}">★</span>`;
        }
        starsHtml += '</div>';
        
        listItem.innerHTML = `
            <span>${this.name}</span>
            ${starsHtml}
        `;
        
        fruitsList.appendChild(listItem);
        
        // Set text color for better contrast
        if (this.color === 'blue' || this.color === 'green' || this.color === 'red') {
            listItem.style.color = 'white';
        }
    }
}

/**
 * btnColor class
 * Creates a button for a specific color
 */
class btnColor {
    constructor(color) {
        this.color = color;
    }
    
    /**
     * Renders the color button
     */
    show() {
        const colorsContainer = document.querySelector('#colors');
        
        // Create button if it doesn't exist for this color
        if (!colorsContainer.querySelector(`[data-color="${this.color}"]`)) {
            const button = document.createElement('button');
            button.className = 'color-btn';
            button.textContent = this.color;
            button.style.backgroundColor = this.color;
            button.style.color = 'white'; // White text for better visibility
            button.dataset.color = this.color;
            
            colorsContainer.appendChild(button);
        }
    }
}

// Initialize when the DOM is fully loaded
$(document).ready(function() {
    // Sample fruit data - using the hannaFruits structure from PDF
    const hannaFruits = [
        { fruit: "apple", color: "red" },
        { fruit: "pear", color: "green" },
        { fruit: "mango", color: "red" },
        { fruit: "plum", color: "blue" }
    ];
    
    // Clear initial content and ensure proper structure
    $('#fruits ul').html('Fruits:');
    
    // Display fruits with appropriate ratings
    hannaFruits.forEach((item, index) => {
        if (index === 1 || index === 3) { // Make pear and plum rated fruits
            // For pear (index 1), use rating 5, for plum (index 3), use rating 1
            const rating = index === 1 ? 5 : 1;
            const ratedFruit = new RatedFruit(item.fruit, item.color, rating);
            ratedFruit.show();
        } else {
            // Create regular fruits
            const fruit = new Fruit(item.fruit, item.color);
            fruit.show();
        }
    });
    
    // Get unique colors
    const uniqueColors = [...new Set(hannaFruits.map(item => item.color))];
    
    // Display color buttons
    uniqueColors.forEach(color => {
        const colorBtn = new btnColor(color);
        colorBtn.show();
    });
    
    // Event delegation for color buttons
    $('#colors').on('click', '.color-btn', function() {
        const selectedColor = $(this).data('color');
        
        // Remove highlight from all fruits
        $('.fruit-item').removeClass('highlighted');
        
        // Add highlight to fruits of the selected color
        $(`.fruit-item[data-color="${selectedColor}"]`).addClass('highlighted');
    });
    
    // Event delegation for star ratings
    $('#fruits').on('click', '.star', function() {
        const star = $(this);
        const rating = parseInt(star.data('rating'));
        const starRating = star.closest('.star-rating');
        
        // Reset all stars
        starRating.find('.star').removeClass('active');
        
        // Activate stars up to the clicked one using prev()
        star.addClass('active');
        star.prevAll('.star').addClass('active');
    });
});