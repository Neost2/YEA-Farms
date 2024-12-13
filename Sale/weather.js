const apiKey = '40e589ff13fdbe17bb79ac28e1743f59'; // Replace with your OpenWeatherMap API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Elgin,AZ,US&units=imperial&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.getElementById('weather-container');
        const weatherHtml = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°F</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} mph</p>
        `;
        weatherContainer.innerHTML = weatherHtml;
    })
    .catch(error => console.error('Error fetching weather data:', error));


