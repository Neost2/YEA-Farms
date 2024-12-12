//document.addEventListener('DOMContentLoaded', () => {
   
    
   // const url = "https://api.ers.usda.gov/data";
   // const apiKey = "DzldciE8gWfxWEscqhb98p3zDHOqV1fHjqbEGMbl";


    //function fetchData(){
       // fetch(url, {
          //  method: 'GET',
            //headers: {
                //'Authorization': `Bearer ${apiKey}`,
               //'Content-Type': 'application/json'
            //}
       // })
   // .then(response => response.json()) 
   // .then(data => { console.log(data); 
     //displayData(data); 
    // }) 
     //.catch(error => { 
        //console.error('Error:', error);
       // }); 
   // }
    
    //function displayData() {
        //const container = document.getElementById('data-container');
        
        //data.forEach(item => {
           // const itemElement = document.createElement('div');
            //itemElement.className = 'data-item';
            //itemElement.textContent = `Data: ${JSON.stringify(item.data)}`;
            //container.appendChild(itemElement);
       // });
   // }
//fetchData();
//});

class AboutPage {
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