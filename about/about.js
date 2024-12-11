// about.js
class AboutPage {
    constructor() {
        this.apiUrl = 'https://neost2.github.io/YEA-Farms/api-data.json';
        this.init();
    }

    async init() {
        try {
            await this.loadAboutContent();
        } catch (error) {
            console.error('Error initializing about page:', error);
            this.handleError(error);
        }
    }

    async loadAboutContent() {
        try {
            const response = await fetch(`${this.apiUrl}/about`);
            const data = await response.json();

            const descriptionDiv = document.getElementById('farm-description');
            descriptionDiv.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.description}</p>
            `;
        } catch (error) {
            throw new Error('Failed to load about content');
        }
    }

    handleError(error) {
        // Add error handling UI
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = `An error occurred: ${error.message}`;
        document.body.prepend(errorDiv);
    }
}

// Initialize the about page
document.addEventListener('DOMContentLoaded', () => {
    new AboutPage();
});