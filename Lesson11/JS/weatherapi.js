const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=92d23e29b4ff25e703f6841c5f01cbaa&units=imperial";
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

  
  let cityID = 5604473;
  let appid = '92d23e29b4ff25e703f6841c5f01cbaa';
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&APPID=${appid}`;
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;  
    const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
    console.log(fiveDayForecast);

    fiveDayForecast.forEach(x => {
      let d = new Date(x.dt_txt);

      document.getElementById(`dayofweek${day+1}`).textContent = dayofweek[d.getDay()];
      document.getElementById(`forecast${day+1}`).textContent = x.main.temp.toFixed(0);
     
      let days = x.weather[0].icon;

      const imagesrc = 'https://openweathermap.org/img/wn/' + days + '@2x.png'; 
      const desc = x.weather[0].description;
    
    
      document.getElementById(`image${day + 1}`).setAttribute('src', imagesrc); 
     document.getElementById(`image${day + 1}`).setAttribute('alt', desc);
    day++;
  });
 });


 
 
 