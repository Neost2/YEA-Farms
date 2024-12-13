const API_URL = './assets/api/v1/api-data.json';

class ContactPage {
    constructor() {
        this.apiUrl = API_URL;
        this.init();
    }

    async init() {
        try {
            const data = await this.fetchData();
            this.renderContent(data);
        } catch (error) {
            console.error('Error initializing contact page:', error);
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

        this.renderTeamMembers(data.response.team.team_members);
    }

    renderTeamMembers(teamMembers) {
        const teamContainer = document.getElementById('teamContainer');
        if (teamContainer && Array.isArray(teamMembers)) {
            teamContainer.innerHTML = teamMembers.map(member => `
                <div class="team-member">
                    <h3>${this.sanitizeHTML(member.name)}</h3>
                    <p><strong>Role:</strong> ${this.sanitizeHTML(member.role)}</p>
                    <p><strong>Bio:</strong> ${this.sanitizeHTML(member.bio)}</p>
                    <div class="contact-details">
                        <p><strong>Email:</strong> ${this.sanitizeHTML(member.contact.email)}</p>
                        <p><strong>Phone:</strong> ${this.sanitizeHTML(member.contact.phone)}</p>
                    </div>
                </div>
            `).join('');
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

document.addEventListener('DOMContentLoaded', async () => {
    new ContactPage();
    try {
        const STATE_CODE = 'AZ'; 
        const PREMIS_ID = '00rhtbht'; 
        const API_URL = `https://aphis-usda.api.gov/premises/v1/${STATE_CODE}/${PREMIS_ID}`;

        const usdaResponse = await fetch(USDA_API_URL, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (!usdaResponse.ok) {
            throw new Error(`USDA API Error: ${usdaResponse.status}`);
        }

        const usdaData = await usdaResponse.json();
        
        
        const usdaContainer = document.getElementById('usdaData');
        usdaContainer.innerHTML = `
            <p><strong>PREMIS ID:</strong> ${usdaData.premisId}</p>
            <p><strong>Operation Type:</strong> ${usdaData.operationType}</p>
            <p><strong>Status:</strong> ${usdaData.status}</p>
            <p><strong>Address:</strong> ${usdaData.address}</p>
        `;

        

    } catch (error) {
        console.error('Error:', error);
        handleError(error);
    }
});

function handleError(error) {
    const errorMessages = {
        '404': 'Data not found',
        '401': 'Unauthorized access to USDA API',
        '403': 'Invalid API key',
        '500': 'Internal server error'
    };
    
    console.error('Error:', error);
    alert(errorMessages[error.status] || 'An unexpected error occurred');
}