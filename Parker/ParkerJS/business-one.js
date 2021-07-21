
fetch('./JSON/Parker.json')
	.then(function (response) {
		return response.json();
	})
	.then(function (Object) {
		/*console.log(Object);*/
		const Businesses = Object['Businesses'];
        const business = Businesses.filter(x => x.name == 'Havana Bakery and Cafe' || x.name == 'Cinderella Ranch Boutique' || x.name == 'Parker Garage') 
		for (let i = 0; i < business.length; i++){
			let companies = document.createElement('section');
			let h2 = document.createElement('h2');
			let images = document.createElement('img');
			let addresses = document.createElement('p');
			let phones = document.createElement('p');
			let hour1 = document.createElement('p');
			let hour2 = document.createElement('p');


			h2.innerHTML = `${business[i].name}`;
            addresses.innerHTML = 'Address: ' + `${business[i].address}`;
            phones.innerHTML = 'Phone: ' + `${business[i].phone}`;
			hour1.innerHTML = 'Hours: ' + `${business[i].hours[0]}`;
			hour2.innerHTML = `${business[i].hours[1]}`;

            images.setAttribute('src', `images/${business[i].photo}`);
            images.setAttribute('alt', ` ${business[i].name}!`);

				companies.appendChild(h2);
				companies.appendChild(images);
				companies.appendChild(addresses);
				companies.appendChild(phones);
				companies.appendChild(hour1);
				companies.appendChild(hour2);
				
                document.querySelector('div.companies').appendChild(companies);
            

		} 
        
			
    });    