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