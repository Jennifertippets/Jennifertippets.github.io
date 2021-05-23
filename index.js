document.querySelector('#lastmod').textContent = document.lastModified;

var date = new Date();
if (document.querySelector("#year") !== null) {
document.querySelector("#year").innerText = date.getFullYear();
}