document.addEventListener('DOMContentLoaded', () => {
   
    
    const url = "https://api.ers.usda.gov/data";
    const apiKey = "DzldciE8gWfxWEscqhb98p3zDHOqV1fHjqbEGMbl";


    function fetchData(){
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })
    .then(response => response.json()) 
    .then(data => { console.log(data); 
     displayData(data); 
     }) 
     .catch(error => { 
        console.error('Error:', error);
        }); 
    }
    
    function displayData() {
        const container = document.getElementById('data-container');
        
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'data-item';
            itemElement.textContent = `Data: ${JSON.stringify(item.data)}`;
            container.appendChild(itemElement);
        });
    }
fetchData();
});

