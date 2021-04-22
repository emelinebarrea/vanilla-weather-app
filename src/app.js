function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let displayedTemperature = document.querySelector("#displayed-temp");
  let displayedCity = document.querySelector("#displayed-city");
  let displayedDescription = document.querySelector("#displayed-description");
  let displayedHumidity = document.querySelector("#displayed-humidity");
  let displayedWind = document.querySelector("#displayed-wind");
  let currentTime = document.querySelector("#current-time");
  let displayedIcon = document.querySelector("#displayed-icon");
  displayedTemperature.innerHTML = Math.round(response.data.main.temp);
  displayedCity.innerHTML = response.data.name;
  displayedDescription.innerHTML = response.data.weather[0].description;
  displayedHumidity.innerHTML = response.data.main.humidity;
  displayedWind.innerHTML = Math.round(response.data.wind.speed);
  currentTime.innerHTML = formatDate(response.data.dt * 1000);
  displayedIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  displayedIcon.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = "df3cb55bcc566bfc15bd0510f52871eb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

search("Dublin");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);
