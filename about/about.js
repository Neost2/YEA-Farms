// about.js
class AboutPage {
    constructor() {
        
        this.apiUrl = 'https://raw.githubusercontent.com/neost2/YEA-Farms/main/api/v1/api-data.json';
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

// Initialize the about page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new AboutPage();
});