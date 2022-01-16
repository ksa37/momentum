
const weather = document.querySelector("#weather");
const city = document.querySelector("#city");
const degree = document.querySelector("#degree");
const API_KEY = "91dca6a16fa1e3c980880dea3fae8e2b";

function handleWeather(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
    degree.innerText = data.main.temp;
  })
}

function handleWeatherErr(){
  console.log("Something went wrong with location");
}
navigator.geolocation.getCurrentPosition(handleWeather, handleWeatherErr);