

class SalePage {
    constructor() {
        
        this.apiUrl = 'http://localhost:3000/public/api/v1/api-data.json';
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
            const response = await fetch(this.apiUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

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
            throw new Error('Invalid data format received');
        }
    }
}