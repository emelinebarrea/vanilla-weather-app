function displayTemperature(response) {
  console.log(response.data);
  let displayedTemperature = document.querySelector("#displayed-temp");
  let displayedCity = document.querySelector("#displayed-city");
  let displayedDescription = document.querySelector("#displayed-description");
  let displayedHumidity = document.querySelector("#displayed-humidity");
  let displayedWind = document.querySelector("#displayed-wind");
  displayedTemperature.innerHTML = Math.round(response.data.main.temp);
  displayedCity.innerHTML = response.data.name;
  displayedDescription.innerHTML = response.data.weather[0].description;
  displayedHumidity.innerHTML = response.data.main.humidity;
  displayedWind.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "df3cb55bcc566bfc15bd0510f52871eb";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
