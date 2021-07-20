fetch('./JSON/Parker.json')
	.then(function (response) {
		return response.json();
	})
	.then(function (Object) {
		/*console.log(Object);*/
		const Businesses = Object['Businesses'];
    
		for (let i = 0; i < Businesses.length; i++){
			let company = document.createElement('section');
			let h2 = document.createElement('h2');
			let images = document.createElement('img');
			let addresses = document.createElement('p');
			let phones = document.createElement('p');
			let hour1 = document.createElement('p');
			let hour2 = document.createElement('p');


			h2.innerHTML = `${Businesses[i].name}`;
            addresses.innerHTML = 'Address: ' + `${Businesses[i].address}`;
            phones.innerHTML = 'Phone: ' + `${Businesses[i].phone}`;
			hour1.innerHTML = 'Hours: ' + `${Businesses[i].hours[0]}`;
			hour2.innerHTML = `${Businesses[i].hours[1]}`;

            images.setAttribute('src', `images/${Businesses[i].photo}`);
            images.setAttribute('alt', ` ${Businesses[i].name}!`);

				company.appendChild(h2);
				company.appendChild(images);
				company.appendChild(addresses);
				company.appendChild(phones);
				company.appendChild(hour1);
				company.appendChild(hour2);
				
                document.querySelector('div.company').appendChild(company);
            

		} 
        
			
    });    