const apiKey = "6f80fa25c4bbe926ab278488ff9bfc8e";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=oryahovo&appid=${apiKey}&units=metric`;

const weatherContainer = document.querySelector(".weather");
const cityNotFoundContainer = document.querySelector(".wrong-city");

const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather() {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.cod === '404') {
        weatherContainer.style.display = "none";
        cityNotFoundContainer.style.display = "block";
    } else {
        weatherContainer.style.display = "block";
        cityNotFoundContainer.style.display = "none";

        temp.innerHTML = `${data.main.temp.toFixed(0)}°C`;
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed.toFixed(0)} km/h`;
    }

    console.log(data);
}

checkWeather();