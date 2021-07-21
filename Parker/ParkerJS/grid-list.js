var element = document.getElementsByClassName("company");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < element.length; i++) {
    element[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < element.length; i++) {
    element[i].style.width = "50%";
  }
}

