var LastUpdated = document.lastModified;
document.writeln ("Last updated: "  + LastUpdated);

var date = new Date();
if (document.querySelector("#year") !== null) {
document.querySelector("#year").innerText = date.getFullYear();
}