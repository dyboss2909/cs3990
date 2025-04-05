
class NumberGenerator {
    constructor(containerId, newsContainerId) {
        this.container = document.getElementById(containerId);
        this.newsContainer = document.getElementById(newsContainerId);
        this.currentNumber = 0;
        this.render();
        this.generateRandomNumber();
        this.generateNews();
        this.setupEventListeners();
    }
    
 
    render() {
        this.container.innerHTML = `
            <div class="number-control-container">
                <button class="less-btn">↓</button>
                <div class="number-display">${this.currentNumber}</div>
                <button class="greater-btn">↑</button>
            </div>
            <div class="make-number-text">click here</div>
        `;
        
        // Store references to elements
        this.numberDisplay = this.container.querySelector('.number-display');
        this.lessBtn = this.container.querySelector('.less-btn');
        this.greaterBtn = this.container.querySelector('.greater-btn');
        this.makeNumberText = this.container.querySelector('.make-number-text');
    }
    
    /**
     * Sets up event listeners for the buttons
     */
    setupEventListeners() {

        this.makeNumberText.addEventListener('click', () => {
            this.generateRandomNumber();
        });
        
        // Increase number by 1
        this.greaterBtn.addEventListener('click', () => {
            this.increaseNumber();
        });
        
        // Decrease number by 1
        this.lessBtn.addEventListener('click', () => {
            this.decreaseNumber();
        });
        
        // Event delegation for "Remove" buttons
        this.newsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-btn')) {        //if the button clicked is "remove"
                const newsItem = e.target.closest('.news-item');    //finds the closest parent class
                if (newsItem) {
                    newsItem.remove();                              //removes that element
                    this.currentNumber--;                           //decreases the number
                    this.updateDisplay();
                }
            }
        });
    }
    
    /**
     * Generates a random number between 0 and 100
     */
    generateRandomNumber() {
        this.currentNumber = Math.floor(Math.random() * 100 + 1);
        this.updateDisplay();
        this.generateNews();
    }
    
    /**
     * Increases the current number by 1 (max 100)
     */
    increaseNumber() {
        if (this.currentNumber < 100) {
            this.currentNumber++;
            this.updateDisplay();
            this.generateNews();
        }
    }
    
    /**
     * Decreases the current number by 1 (min 0)
     */
    decreaseNumber() {
        if (this.currentNumber > 0) {
            this.currentNumber--;
            this.updateDisplay();
            this.generateNews();
        }
    }
    
    /**
     * Updates the number display
     */
    updateDisplay() {
        this.numberDisplay.textContent = this.currentNumber;
    }
    
    /**
     * Generates news items based on the current number
     */
    generateNews() {
        this.newsContainer.innerHTML = '';
        
        for (let i = 0; i < this.currentNumber; i++) {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            
            newsItem.innerHTML = `
                <div class="news-title">Title #${i + 1}</div>
                <div class="news-content">
                    Mario Kart’s biggest new addition centers around a huge, new Forza Horizon-style world filled with tons of courses to race against friends and enemies on. Instead of just having a series of tracks you select from a menu (although you’ll have that option too).
                </div>
                <button class="remove-btn">Remove</button>
            `;
            
            this.newsContainer.appendChild(newsItem);
        }
    }
}

// Initialize the NumberGenerator when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const numberGenerator = new NumberGenerator('numberGeneratorContainer', 'newsContainer');
    generateRandomNumber();

});