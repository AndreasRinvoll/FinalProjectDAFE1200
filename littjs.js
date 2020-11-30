
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

function toggleButton(element) {
    var pressed = (element.getAttribute("aria-pressed") === "true");
    element.setAttribute("aria-pressed", !pressed);
  }
/*
  var pressed = (element.getAttribute("aria-pressed") === "true");
  element.setAttribute("aria-pressed", !pressed);
*/

  function toggleButton(object){
    var value = object.getAttribute("aria-pressed");
    object.setAttribute("aria-pressed",value);
  }