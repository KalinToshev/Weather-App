const apiKey = "6f80fa25c4bbe926ab278488ff9bfc8e";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=ohio&appid=${apiKey}&units=metric`;

async function checkWeather() {
    const response = await fetch(apiURL);
    const data = await response.json();

    console.log(data);
}

checkWeather();