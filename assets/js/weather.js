const apiKey = '40e589ff13fdbe17bb79ac28e1743f59';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Sierra Vista,AZ,US&units=imperial&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.getElementById('weather-container');
        const temperature = data.main.temp.toFixed(1);
        const weatherHtml = `
        
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${temperature}°F</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} mph</p>
        `;
        weatherContainer.innerHTML = weatherHtml;
    })
    .catch(error => console.error('Error fetching weather data:', error));


