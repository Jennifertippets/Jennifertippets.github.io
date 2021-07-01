const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0368759&lon=-111.3963177&appid=92d23e29b4ff25e703f6841c5f01cbaa&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].description.toUpperCase();
    document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;

    let Temp = jsObject.main.temp;
   let speedW = jsObject.wind.speed;
console.log(Temp);
console.log(speedW);
   if(Temp <= 50 && speedW >= 3){
     let p = Math.pow(speedW, 0.16);
     let f = 35.74 + 0.6215 * Temp - 35.75 * p + 0.4275 * Temp * p;
     let result = f.toFixed(0);
     document.getElementById('wind').textContent = result + "&deg;F";
   }
   else{
      document.getElementById('wind').textContent = "N/A";
   }
  }); 
