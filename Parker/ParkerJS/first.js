document.querySelector('#last').textContent = document.lastModified;

var date = new Date();
if (document.querySelector("#year") !== null) {
document.querySelector("#year").innerText = date.getFullYear();
}
/***************************Menu bar**************************** */
function toggleMenu() {
	console.log(document.getElementById("menu").classList);
	document.getElementById("menu").classList.toggle("hide");
}
/****************************WebFont********************************/
WebFont.load({google: {families: ["Bona Nova", "Cabin"]
    }});