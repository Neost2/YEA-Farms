const API_URL = './assets/api/v1/api-data.json';
class SalePage {
    constructor() {
        this.apiUrl = API_URL;
        this.init();
    }

    async init() {
        try {
            const data = await this.fetchData();
            this.renderContent(data);
        } catch (error) {
            console.error('Error initializing about page:', error);
            this.handleError(error);
        }
    }

    async fetchData() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            throw new Error(`Failed to fetch data: ${error.message}`);
        }
    }

    renderContent(data) {
        if (!data || !data.response) {
            throw new Error('Invalid data format');
        }

        this.renderForSale(data.response.inventory.for_sale.pigs);
        this.renderRecentSales(data.response.inventory.recent_sales.pigs);
    }

    renderForSale(pigs) {
        const forSaleElement = document.getElementById('for-sale-container');
        if (forSaleElement && Array.isArray(pigs)) {
            const pigsHTML = pigs.map(pig => `
                <div class="pig-card">
                    <img src="${this.sanitizeHTML(pig.image_url)}" alt="${this.sanitizeHTML(pig.name)}">
                    <h3>${this.sanitizeHTML(pig.name)}</h3>
                    <p>Price: $${this.sanitizeHTML(pig.price.toString())}</p>
                    <p>Breed: ${this.sanitizeHTML(pig.breed)}</p>
                    <p>Ear Notch: ${this.sanitizeHTML(pig['ear notch'])}</p>
                    <p>DOB: ${this.sanitizeHTML(pig.DOB)}</p>
                    <p>Gender: ${this.sanitizeHTML(pig.gender)}</p>
                </div>
            `).join('');
            
            forSaleElement.innerHTML = `
                <h2>Pigs For Sale</h2>
                <div class="pig-grid">${pigsHTML}</div>
            `;
        }
    }

    renderRecentSales(pigs) {
        const recentSalesElement = document.getElementById('recent-sales-container');
        if (recentSalesElement && Array.isArray(pigs)) {
            const pigsHTML = pigs.map(pig => `
                <div class="pig-card sold">
                    <img src="${this.sanitizeHTML(pig.image_url)}" alt="${this.sanitizeHTML(pig.name)}">
                    <h3>${this.sanitizeHTML(pig.name)}</h3>
                    <p>Sold for: $${this.sanitizeHTML(pig.price.toString())}</p>
                    <p>Breed: ${this.sanitizeHTML(pig.breed)}</p>
                    <p>Dam and Sire: ${this.sanitizeHTML(pig['dam and sire'])}</p>
                </div>
            `).join('');
            
            recentSalesElement.innerHTML = `
                <h2>Recent Sales</h2>
                <div class="pig-grid">${pigsHTML}</div>
            `;
        }
    }

    sanitizeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    handleError(error) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = `An error occurred: ${error.message}`;
        document.body.prepend(errorDiv);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SalePage();
});