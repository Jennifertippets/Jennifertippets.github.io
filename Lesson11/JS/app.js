 /*****banner***** */
 const daynames = new Date();
 if(daynames.getDay() == 5){
     document.querySelector('#friday').style.display = 'block'; }  
     
     
const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;


function toggleMenu() {
	console.log(document.getElementById("menu").classList);
	document.getElementById("menu").classList.toggle("hide");
}

/********************************web font********************************* */

WebFont.load({google: {families: ["Fira Sans", "Padauk"]
    }});

/*******************gallery********************* */	



const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    
    };
};
const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver(items => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);

            }
        });
    }, imgOptions);

    imagesToLoad.forEach(img => {
        imgObserver.observe(img);
    });
} else {
  imagesToLoad.forEach((img) => {
      loadImages(img);
  });
}


console.log("localstorage visit count now:" + localStorage.visitcount);

  /************************storm center************************* */  
  function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
