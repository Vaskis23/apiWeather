//HW1 input < city
//HW2 onclick -> timer
const KEY = "041b96fbafe3071af8383a8cb009ce90";
let city = "Paris";

function loadWeatherData() {
    // Получаем значение введенного города из элемента input
    let cityInput = document.getElementById("cityInput").value;

    // Формируем URL для запроса погоды в указанном городе
    const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${KEY}`;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", CURRENT_WEATHER_URL);

    xhr.onload = function () {
        let data = JSON.parse(xhr.responseText);
        let temp = data.main.temp;
        let speed = data.wind.speed;
        let description = data.weather[0].description;
        let icon = data.weather[0].icon;

        let html = document.createElement('div');
        let h1 = document.createElement('h1');
        h1.innerText = "Temperature: " + temp + "°C";
        let h2 = document.createElement('h2');
        h2.innerText = description;
        let p = document.createElement('p');
        p.innerText = "Wind speed: " + speed + " m/s";
        let img = document.createElement('img');
        img.src = `http://openweathermap.org/img/wn/${icon}.png`;

        html.appendChild(h1);
        html.appendChild(h2);
        html.appendChild(p);
        html.appendChild(img);

        // Очищаем содержимое контейнера перед добавлением новых данных
        document.querySelector('.weather').innerHTML = '';
        document.querySelector('.weather').appendChild(html);
    }

    xhr.send();
}
