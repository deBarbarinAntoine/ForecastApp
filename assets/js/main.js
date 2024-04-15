const baseURL = 'https://api.openweathermap.org/data/2.5/';
const appid = '3d2d0d47a3e6c225af76b56a13cc6496';
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search');
const cityElement = document.querySelector('.city');
const dateElement = document.querySelector('.date');
const weatherIconElement = document.querySelector('#weather-icon');
const tempElement = document.querySelector('.temp');
const weatherElement = document.querySelector('.weather');
const windSpeedElement = document.querySelector('.wind-speed');
const humidityPercentageElement = document.querySelector('.humidity-percentage');
const hourlyForecastElement = document.querySelector('.hourly-forecast');
const weatherBackgroundElement = document.querySelector('#weather-background');
const messageElement = document.querySelector('.message');
const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
];

async function getCityWeather(city) {
    const response = await fetch(`${baseURL}weather?q=${city}&units=metric&lang=fr&appid=${appid}`);
    return await response.json();
}

async function reloadForecast(city) {
    const weather = await getCityWeather(city);
    if (weather.cod === '404') {
        messageElement.innerHTML = 'Ville non trouvée !';
        return;
    }
    const time = getHour(weather.dt, weather.timezone);
    const sunset = getHour(weather.sys.sunset, weather.timezone);
    if (sunset < time) {
        weatherBackgroundElement.src = '../assets/img/bg/night.png';
    } else {
        weatherBackgroundElement.src = '../assets/img/bg/day.png';
    }
    weatherIconElement.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    weatherElement.innerHTML = weather.weather[0].description;
    const temperature = Math.floor(weather.main.temp)
    tempElement.innerHTML = `${temperature}°`;
    humidityPercentageElement.innerHTML = `${weather.main.humidity}%`;
    const windSpeed = Math.floor(weather.wind.speed);
    windSpeedElement.innerHTML = `${windSpeed}km/h`;
    cityElement.innerHTML = city;
    dateElement.innerHTML = `${new Date(time).getDate()} ${months[new Date(time).getMonth()]} ${new Date(time).getFullYear()}`;
    console.log(weather);
    console.log(weather.timezone);
    console.log(weather.dt);
}

async function clickInput() {
    const city = searchInput.value;
    const weather = await reloadForecast(city);
}

function getHour(time, timezone) {
    const currentTimestamp = (time * 1000);
    const date = new Date(time);
    console.log(date);
    return currentTimestamp;
}

reloadForecast('Marseille');

searchBtn.addEventListener('click', clickInput);