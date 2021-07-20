const oneapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.519&lon=-104.761&exclude=minutely,hourly&appid=92d23e29b4ff25e703f6841c5f01cbaa&units=imperial";
fetch(oneapiURL)
.then((response) => response.json())
.then((data) => {
	console.log(data);
	document.getElementById('currently').textContent = data.current.weather[0].description.toUpperCase();
    document.getElementById('temp').textContent = data.current.temp.toFixed(0);
    document.getElementById('humidity').textContent = data.current.humidity;
	document.getElementById('alert').textContent = data.alerts[0].event;
	/*document.getElementById('dayofweek').textContent = data.daily[3];
	document.getElementById('forecast').textContent = data.daily[3].temp;*/
	
});

	const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=39.519&lon=-104.761&appid=92d23e29b4ff25e703f6841c5f01cbaa&units=imperial";
	fetch(forecastURL)
	.then((response) => response.json())
	.then((jsObject) => {
	  console.log(jsObject);
	  let day = 0;  
	  const dayofweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	  const threeDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
	  console.log(threeDayForecast);
  
	  threeDayForecast.forEach(x => {
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



