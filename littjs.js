
var tall = 1;

function overflowx(x){
    tall+=1;
    if (tall%2 == 0){
        document.body.style.overflowY = "hidden";
        tabindex = 0;
    }
    else{
        document.body.style.overflowY = "visible";
    }

}