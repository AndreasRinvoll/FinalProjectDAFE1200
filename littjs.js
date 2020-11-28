
var tall = 1;

function overflowx(){
    tall+=1;
    if (tall%2 == 0){
        document.body.style.overflowY = "hidden";
    }
    else{
        document.body.style.overflowY = "visible";

    }

}
