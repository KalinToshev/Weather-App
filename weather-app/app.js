const apiKey = "6f80fa25c4bbe926ab278488ff9bfc8e";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric&q=`;

const searchBtn = document.querySelector(".search button");

const weatherContainer = document.querySelector(".weather");
const cityNotFoundContainer = document.querySelector(".wrong-city");

const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(cityName) {
  const response = await fetch(apiURL + cityName);
  const data = await response.json();

  if (data.cod === "404") {
    weatherContainer.style.display = "none";
    cityNotFoundContainer.style.display = "block";
  } else {
    weatherContainer.style.display = "block";
    cityNotFoundContainer.style.display = "none";

    temp.innerHTML = `${data.main.temp.toFixed(0)}°C`;
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed.toFixed(0)} km/h`;

    // TODO: Add weather icon
  }
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkWeather(document.querySelector(".search input").value);

  document.querySelector(".search input").value = "";
});
