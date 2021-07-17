const oneapiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.519&lon=-104.761&exclude=minutely,hourly&appid=92d23e29b4ff25e703f6841c5f01cbaa&units=imperial";
fetch(oneapiURL)
.then((response) => response.json())
.then((data) => {
	console.log(data);
	document.getElementById('currently').textContent = data.current.weather[0].description.toUpperCase();
    document.getElementById('temp').textContent = data.current.temp.toFixed(0);
    document.getElementById('humidity').textContent = data.current.humidity;
	document.getElementById('alert').textContent = data.alerts[0].event;
});