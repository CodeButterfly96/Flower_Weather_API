//challenge 1
//display current date and time using JavaScript: Tuesday 16:00
let weekDay = new Date();
let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
  `Sunday`,
];
let day = days[weekDay.getDay()];
let currentHour = weekDay.getHours();

if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinutes = weekDay.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}
let time = `${currentHour}:${currentMinutes}`;

let date = document.querySelector("#date");
date.innerHTML = `${day} ${time}`;

//challenge 2
/*add a search engine, when searching for a city(i.e. Paris), 
display the city name on the page after the user submits the form. */
function displayCity(event) {
  event.preventDefault();
  let cityVal = document.querySelector("#city-input");
  let cityHeader = document.querySelector("#searched-city");
  console.log(cityVal.value);
  cityHeader.innerHTML = `${cityVal.value}`;
}
let cityForm = document.querySelector("form");
cityForm.addEventListener("submit", displayCity);
//bonus challenge
/* Display a fake temperature (i.e. 17) in Celsius and add a link to convert
it to Fahrenheit. When clicking on it, it should convert the temperatrue to 
Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.*/
function showCelsius(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#first-temp");
  currentTemperature.innerHTML = "10";
}
function showFahrenheit(event) {
  event.preventDefault();
  let currentTemperature = document.querySelector("#first-temp");
  currentTemperature.innerHTML = "50";
}
let celciusTemperature = document.querySelector("#celsius");
celciusTemperature.addEventListener("click", showCelsius);

let fahrenheitTemperature = document.querySelector("#fahrenheit");
fahrenheitTemperature.addEventListener("click", showFahrenheit);
