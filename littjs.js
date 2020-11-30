
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
/*
function toggleButton(element) {
    var pressed = (element.getAttribute("aria-pressed") === "true");
    element.setAttribute("aria-pressed", !pressed);
  }

  var pressed = (element.getAttribute("aria-pressed") === "true");
  element.setAttribute("aria-pressed", !pressed);


  function toggleButton(object){
    var value = object.getAttribute("aria-pressed");
    object.setAttribute("aria-pressed",value);
  }


*/

var toggle = document.querySelector('#icon');
var menu = document.querySelector('#navHr');
if (toggle) {
toggle.addEventListener('click', function(){
  if (navHr.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    navhr.classList.remove('is-active');
  } else {
    navHr.classList.add('is-active'); 
    this.setAttribute('aria-expanded', 'true');
  }
})};