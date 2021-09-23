
console.log ("Hi! Welcome to my page!")

/* math */
var size = 100;
var maxSize = (size *4) + 15;
var minSie = (size/3) - 15 + (size *2);

/*button*/
function menuToggle() {
  var x = document.getElementByID('myNavtoggle');
  x.className += ' responsive';
}

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
