var company=document.getElementsByClassName("section");
var i;

function listView(){
     for(i=0;i<company.length;i++){
         company[i].style.width="100%";
     }
}

function gridView(){
     for(i=0;i<company.length;i++){
         company[i].style.width="50%";
     }
}

var container=document.getElementById("buttons-one");
var btns=container.getElementsByClassName("buttons-two");

for( var i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        var current=document.getElementsByClassName("active");
        current[0].className=current[0].className.replace("active","");
        this.className+=" active";
    })
}
