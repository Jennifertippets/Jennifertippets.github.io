const daynames = new Date();
if(daynames.getDay() == 6){
    document.querySelector('#friday').style.display = 'block';
} else{document.querySelector('#friday').style.display ="none"}