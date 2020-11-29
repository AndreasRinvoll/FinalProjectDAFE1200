
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

function toggleButton(button) {
    var pressed = (button.getAttribute("aria-pressed") === "true");
    button.setAttribute("aria-pressed", !pressed);
    //button.setAttribute('aria-pressed', isAriaPressed ? 'false' : 'true');
  }