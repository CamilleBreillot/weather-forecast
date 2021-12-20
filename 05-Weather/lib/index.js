// TODO: Write your JS code in here
const temperaturePlaceholder = document.querySelector("#temperature");
const weatherPlaceholder = document.querySelector("#description-weather");
const cityPlaceholder = document.querySelector("#cityname");
const weatherIconPlaceholder = document.querySelector("#weather-icon");

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("#search-input").value;
  cityPlaceholder.innerText = "";
  cityPlaceholder.innerText = input;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=b9ab24fd44fa2c32039f24e1d8ae83a9&units=metric`)
    .then(response => response.json())
    .then((data) => {
      const temp = `${Math.round(data.main.temp * 10) / 10} °C`;
      temperaturePlaceholder.innerText = temp;
      const weather = data.weather[0].description;
      weatherPlaceholder.innerText = weather;
      const icon = data.weather[0].icon;
      weatherIconPlaceholder.attributes.src.value = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      const dateElement = document.getElementById("date");
      const date1 = new Date();
      date1.setHours(date1.getHours() - 1);
      const dateInSeconds = date1.getTime();
      const realDate = dateInSeconds + data.timezone * 1000;
      const date2 = new Date(realDate);
      dateElement.innerText = date2;
    });
});
