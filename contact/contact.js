document.addEventListener('DOMContentLoaded', async () => {
    try {
        const PREMIS_ID = '00rhtbht';
        const API_KEY = 'DVQf4JD7KYgkcub0aPmsahIikjbjGBvGPIbB54Ho';
        const USDA_API_URL = `https://api.ers.usda.gov/premises/${PREMIS_ID}`;

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

        const response = await fetch('/assets/api/v1/api-data.json');
        const data = await response.json();
        
        
        document.getElementById('farmName').textContent = data.response.about.farm_info.name;
        document.getElementById('farmDescription').textContent = data.response.about.farm_info.description;
        document.getElementById('location').textContent = 
            `${data.response.about.farm_info.location.city}, ${data.response.about.farm_info.location.state}`;

        
        const teamContainer = document.getElementById('teamContainer');
        data.response.team.team_members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.className = 'team-member';
            memberElement.innerHTML = `
                <h3>${member.name}</h3>
                <p><strong>Role:</strong> ${member.role}</p>
                <p><strong>Bio:</strong> ${member.bio}</p>
                <div class="contact-details">
                    <p><strong>Email:</strong> ${member.contact.email}</p>
                    <p><strong>Phone:</strong> ${member.contact.phone}</p>
                </div>
            `;
            teamContainer.appendChild(memberElement);
        });

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