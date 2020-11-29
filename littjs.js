
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

function handleBtnKeyDown() {
    if (event.key === "" || event.key === "Spacebar" ||event.key === "Enter") {
       // prevent default action to stop scrolling when space is pressed
      event.preventDefault();
      overflowx();
      toggleButton(event.target);
    }
  }

function toggleButton(button) {
    var pressed = (button.getAttribute("aria-pressed") === "true");
    button.setAttribute("aria-pressed", !pressed);
    //button.setAttribute('aria-pressed', isAriaPressed ? 'false' : 'true');
  }

  //document.body.style.overflowY = aria-hidden === "true";
