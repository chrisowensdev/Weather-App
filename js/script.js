'use strict';
const cityTitle = document.getElementById('cityTitle')
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const wind = document.getElementById('wind');
const getWeatherButton = document.getElementById('getWeatherButton');
const cityInput = document.getElementById('cityInput')

function get(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data;
        })
}

const getWeather = (city) => {
    get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2bb32f3637f6d383eb6cd8283732c090&units=imperial`)
        .then(res => {
                console.log(res.main.temp);
                cityTitle.innerHTML = res.name;
                temperature.innerHTML = res.main.temp;
                description.innerHTML = res.weather[0].main;
                wind.innerHTML = res.wind.speed;
                displayWeatherImage(res.weather[0].main);
            }

        );
}



const displayWeatherImage = (weather) => {
    console.log(weather);
    const image = document.getElementById('weatherImage');
    image.setAttribute('src', 'images/cloudy.png')
    switch (weather) {
        case 'Rain':
            image.setAttribute('src', 'images/rain.png');
            break;
        case 'Clear':
            image.setAttribute('src', 'images/sunny.png');
            break;
        default:
            image.setAttribute('src', 'images/cloudy.png');
    }


}


getWeatherButton.addEventListener('click', function (e) {
    e.preventDefault();
    getWeather(cityInput.value);
})


//res.weather[0].main, res.main.temp, res.wind.speed

const hourInDay = new Date().getHours();