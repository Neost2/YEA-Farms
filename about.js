
const API_URL = '/api-data.json';

class LoremIpsumGenerator {
    constructor() {
        this.apiUrl = 'https://loripsum.net/api';
        this.init();
    }

    async init() {
        try {
            const loremText = await this.fetchLorem();
            this.renderContent(loremText);
        } catch (error) {
            console.error('Error fetching lorem ipsum:', error);
            this.handleError(error);
        }
    }

    async fetchLorem() {
        try {
            const corsProxy = 'https://cors-anywhere.herokuapp.com/';
            const response = await fetch(`${corsProxy}${this.apiUrl}/3/medium/headers/decorate`);
            
            if (!response.ok) {
                throw new Error(`Lorem API error: ${response.status}`);
            }
            
            return await response.text();
        } catch (error) {
            throw new Error(`Failed to fetch lorem ipsum: ${error.message}`);
        }
    }

    renderContent(text) {
        const contentElement = document.getElementById('lorem-content');
        if (!contentElement) {
            console.error('Lorem content element not found');
            return;
        }
        contentElement.innerHTML = text;
    }

    handleError(error) {
        const contentElement = document.getElementById('lorem-content');
        if (contentElement) {
            contentElement.innerHTML = `<div class="error">Error loading content: ${error.message}</div>`;
        }
    }
}

class AboutPage {
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

        this.renderMissionStatement(data.response.about.farm_info);
        this.renderFarmDescription(data.response.about.farm_info);
        this.renderMilestones(data.response.history.milestones);
    }

    renderMissionStatement(farmInfo) {
        const missionElement = document.getElementById('mission-statement');
        if (missionElement && farmInfo.mission_statement) {
            missionElement.innerHTML = `
                <p class="mission">${this.sanitizeHTML(farmInfo.mission_statement)}</p>
            `;
        }
    }

    renderFarmDescription(farmInfo) {
        const descriptionElement = document.getElementById('farm-description');
        if (descriptionElement && farmInfo) {
            descriptionElement.innerHTML = `
                <h2>About ${this.sanitizeHTML(farmInfo.name)}</h2>
                <p>${this.sanitizeHTML(farmInfo.description)}</p>
                <div class="farm-location">
                    <p>Located in ${this.sanitizeHTML(farmInfo.location.city)}, ${this.sanitizeHTML(farmInfo.location.state)}</p>
                </div>
            `;
        }
    }

    renderMilestones(milestones) {
        const milestonesElement = document.getElementById('milestones');
        if (milestonesElement && Array.isArray(milestones)) {
            const timelineHTML = milestones
                .sort((a, b) => b.year - a.year)
                .map(milestone => `
                    <div class="milestone">
                        <span class="year">${this.sanitizeHTML(milestone.year.toString())}</span>
                        <p>${this.sanitizeHTML(milestone.event)}</p>
                    </div>
                `).join('');
            
            milestonesElement.innerHTML = timelineHTML;
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

// Initialize both classes when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AboutPage();
    new LoremIpsumGenerator();
});