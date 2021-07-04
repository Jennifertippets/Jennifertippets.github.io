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

  let cityID = 5585010;
  let appid = '92d23e29b4ff25e703f6841c5f01cbaa';
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&APPID=${appid}&units=imperial`;
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

 const request = 'https://byui-cit230.github.io/weather/data/towndata.json';

 fetch(request)
   .then(function (response) {
     return response.json();
   })
   .then(function (jsonObject) {
     const preston = jsonObject['towns'];
         const prestons = preston.filter(x => x.name == 'Fish Haven')
 
     for (let i = 0; i < preston.length; i++) {
       let card = document.createElement('section');
       
       let event1 = document.createElement('p');
       let event2 = document.createElement('p');
       let event3 = document.createElement('p');
       let event4 = document.createElement('p');

       event1.innerHTML = `${prestons[i].events[0]}`;
       event2.innerHTML = `${prestons[i].events[1]}`;
       event3.innerHTML = `${prestons[i].events[2]}`;
       event4.innerHTML = `${prestons[i].events[3]}`;


       card.appendChild(event1);
       card.appendChild(event2);
       card.appendChild(event3);
       card.appendChild(event4);

          document.querySelector('div.notes-two').appendChild(card);
       }
     
   });
 
 
 
 