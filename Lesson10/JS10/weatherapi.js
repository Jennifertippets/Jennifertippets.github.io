const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=92d23e29b4ff25e703f6841c5f01cbaa&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].description.toUpperCase();
    document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;
  });

  