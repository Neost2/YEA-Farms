// const weatherIcon = document.getElementById('weather-icon');
// const messageEl = document.getElementById('message');
// const forecastEl = document.getElementById('forecast');

// let konamiSequence = [];
// const badWeatherCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up, Up, Down, Down, Left, Right, Left, Right, B, A

// document.addEventListener('keydown', (e) => {
//     konamiSequence.push(e.keyCode);
//     konamiSequence = konamiSequence.slice(-10); // Keep only the last 10 keypresses

//     if (konamiSequence.join(',') === badWeatherCode.join(',')) {
//         simulateBadWeather();
//     }
// });

// function simulateBadWeather() {
//     const badWeatherData = {
//         daily: {
//             weathercode: [80, 82, 85, 86, 95], // Bad weather codes
//             temperature_2m_max: [5, 4, 3, 2, 1],
//             temperature_2m_min: [0, -1, -2, -3, -4]
//         }
//     };

//     updateWeatherIcon(badWeatherData.daily.weathercode[0]);
//     updateForecast(badWeatherData.daily);
    

//     messageEl.textContent = 'Bad weather simulation activated!';
// }

// document.getElementById('getAction').addEventListener('click', () => {
//     const lat = 31.6598128; 
//     const lon = -110.5253565; 

//     messageEl.textContent = 'Checking the weather...';
//     weatherIcon.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
//     forecastEl.textContent = '';

//     fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe/Zurich&forecast_days=5`)
//         .then(response => response.json())
//         .then(data => {
//             const weatherCode = data.daily.weathercode[0];
//             updateWeatherIcon(weatherCode);
//             updateForecast(data.daily);
//             if (weatherCode >= 1 && weatherCode <= 3) {
//                 getJoke();
//             } else {
//                 getExcuse();
//             }
            
//         })
//         .catch(error => {
//             messageEl.textContent = 'Oops! The weather fairies are on strike. Try again later!';
//             weatherIcon.innerHTML = '<i class="fas fa-question"></i>';
//         });
// });

// function updateWeatherIcon(weatherCode) {
//     let icon = '';
//     if (weatherCode >= 1 && weatherCode <= 3) {
//         icon = '<i class="fas fa-sun" style="color: #FFD700;"></i>';
//     } else if (weatherCode >= 4 && weatherCode <= 48) {
//         icon = '<i class="fas fa-cloud" style="color: #A9A9A9;"></i>';
//     } else if (weatherCode >= 49 && weatherCode <= 77) {
//         icon = '<i class="fas fa-cloud-rain" style="color: #4682B4;"></i>';
//     } else {
//         icon = '<i class="fas fa-bolt" style="color: #FFD700;"></i>';
//     }
//     weatherIcon.innerHTML = icon;
// }

// function updateForecast(dailyData) {
//     const days = ['Today', 'Tomorrow', 'Day 3', 'Day 4', 'Day 5'];
//     let forecastHTML = '<h3>5-Day Forecast:</h3>';
//     for (let i = 0; i < 5; i++) {
//         const icon = getWeatherIcon(dailyData.weathercode[i]);
//         forecastHTML += `
//             <div class="forecast-day">
//                 <strong>${days[i]}:</strong> ${icon}
//                 ${dailyData.temperature_2m_min[i]}°F - ${dailyData.temperature_2m_max[i]}°C
//             </div>
//         `;
//     }
//     forecastEl.innerHTML = forecastHTML;
// }

// function getWeatherIcon(weatherCode) {
//     if (weatherCode >= 1 && weatherCode <= 3) {
//         return '<i class="fas fa-sun" style="color: #FFD700;"></i>';
//     } else if (weatherCode >= 4 && weatherCode <= 48) {
//         return '<i class="fas fa-cloud" style="color: #A9A9A9;"></i>';
//     } else if (weatherCode >= 49 && weatherCode <= 77) {
//         return '<i class="fas fa-cloud-rain" style="color: #4682B4;"></i>';
//     } else {
//         return '<i class="fas fa-bolt" style="color: #FFD700;"></i>';
//     }
// }

// script.js
const apiKey = 'Y40e589ff13fdbe17bb79ac28e1743f59'; // Replace with your OpenWeatherMap API key
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


