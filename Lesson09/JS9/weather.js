/*const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
     const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rain = document.createElement('p');

            let image = document.createElement('img');


            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', towns[i].photo);
            image.setAttribute('alt', towns[i].name + ' - ' + towns[i].order);
            image.setAttribute('title', towns[i].name + ' - ' + towns[i].order);
            if(towns[i].name == 'Soda Springs'|| towns[i].name == 'Fish Haven'|| towns[i].name == 'Preston'){
            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(founded);
            card.appendChild(population);
            card.appendChild(rain);
            card.appendChild(image);

             document.querySelector('div.cards').appendChild(card);  
            }
        }
    });*/
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const towns = jsonObject['towns'];
        const town = towns.filter(x => x.name == 'Fish Haven' || x.name == 'Soda Springs' || x.name == 'Preston')

		for (let i = 0; i < town.length; i++) {
			let card = document.createElement('section');
			let h2 = document.createElement('h2');
			let motto = document.createElement('h3');
			let founded = document.createElement('p');
			let population = document.createElement('p');
			let rain = document.createElement('p');
            let image = document.createElement('img');

            h2.innerHTML = `${town[i].name}`;
            motto.innerHTML = `${town[i].motto}`;
            founded.innerHTML = 'Year Founded: ' + `${town[i].yearFounded}`;
            population.innerHTML = 'Population: ' + `${town[i].currentPopulation}`;
            rain.innerHTML = 'Annual Rain Fall: ' + `${town[i].averageRainfall}`;

            image.setAttribute('src', `image/${town[i].photo}`);
            image.setAttribute('alt', ` ${town[i].name}!`);

				card.appendChild(h2);
				card.appendChild(motto);
				card.appendChild(founded);
				card.appendChild(population);
				card.appendChild(rain);
				card.appendChild(image);
                document.querySelector('div.cards').appendChild(card);
			}
    
	});

