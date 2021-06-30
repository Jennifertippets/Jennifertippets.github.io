const datefield = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

/**************bar menu************/

/*const menubutton = document.querySelector('.menu');
const principalnav = document.querySelector('.hide')

menubutton.addEventListener('click', () => {principalnav.classList.toggle('responsive')}, false);


/*window.onresize = () => {if (window.innerWidth > 760) principalnav.classList.remove('responsive')};*/
function toggleMenu() {
	console.log(document.getElementById("menu").classList);
	document.getElementById("menu").classList.toggle("hide");
}