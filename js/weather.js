
const weather = document.querySelector("#weather");
const city = document.querySelector("#city");
const degree = document.querySelector("#degree");
const API_KEY = "91dca6a16fa1e3c980880dea3fae8e2b";

function handleLocation(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const location_obj = {lat:lat, lon:lon};
  localStorage.setItem("location", JSON.stringify(location_obj));
  getWeather(lat,lon);
}

function handleLocationErr(){
  console.log("Something went wrong with location");
}

function getWeather(lat, lon){
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(lat, lon)
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
    degree.innerText = Math.round(data.main.temp) + "degree";
  })
}

const location_obj = JSON.parse(localStorage.getItem("location"));

if(location_obj){
  getWeather(location_obj.lat, location_obj.lon);
}else{
  navigator.geolocation.getCurrentPosition(handleLocation, handleLocationErr);
}