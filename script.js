const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0ad3ed6013mshac0a229095c93adp1a5f42jsnca87d2430c79',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city) => {
  cityName.innerHTML = city
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
  .then(response => response.json())
  .then((response) =>{
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
  })
  .catch(err => console.error(err));
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather(city.value);
})
getWeather("Guwahati");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options)
  .then(response => response.json())
  .then((response) =>{
        console.log(response)
        temp_M.innerHTML = response.temp
        feels_like_M.innerHTML = response.feels_like
        humidity_M.innerHTML = response.humidity
        wind_speed_M.innerHTML = response.wind_speed
  })
  .catch(err => console.error(err));

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi',options)
  .then(response => response.json())
  .then((response) =>{
        console.log(response)
        temp_d.innerHTML = response.temp
        feels_like_d.innerHTML = response.feels_like
        humidity_d.innerHTML = response.humidity
        wind_speed_d.innerHTML = response.wind_speed
  })
  .catch(err => console.error(err));

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune',options)
  .then(response => response.json())
  .then((response) =>{
        console.log(response)
        temp_p.innerHTML = response.temp
        feels_like_p.innerHTML = response.feels_like
        humidity_p.innerHTML = response.humidity
        wind_speed_p.innerHTML = response.wind_speed
  })
  .catch(err => console.error(err));

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=jalna',options)
  .then(response => response.json())
  .then((response) =>{
        console.log(response)
        temp_j.innerHTML = response.temp
        feels_like_j.innerHTML = response.feels_like
        humidity_j.innerHTML = response.humidity
        wind_speed_j.innerHTML = response.wind_speed
  })
  .catch(err => console.error(err));



