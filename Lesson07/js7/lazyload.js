
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

if(typeof Storage!=="undefined"){
    if(localStorage.visitcount) {
        document.getElementById("visit").innerHTML = "Welcome back, you've been here " + localStorage.visitcount  +  " times before.";
        localStorage.visitcount = Number(localStorage.visitcount) + 1;
    } else {
        localStorage.visitcount = 1;
        document.getElementById("visit").innerHTML = "Welcome. This is your first time here!";

    }
    }
console.log("localstorage visit count now:" + localStorage.visitcount);