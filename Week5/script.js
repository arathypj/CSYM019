function moveUp() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';
}

function moveDown() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
}

function moveLeft() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';
}

function moveRight() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
}



function myKeyDown(event) {
  if (event.keyCode == 37) {
    setInterval(moveLeft, 10);
  }
  if (event.keyCode == 38) {
    setInterval(moveUp, 10);
  }
  if (event.keyCode == 40) {
    setInterval(moveDown, 10);
  }
  if (event.keyCode == 39) {
    setInterval(moveRight, 10);
  }
}

// function myLoadEvent() {
//   document.addEventListener('keydown', myKeyDown);
// }

function changeContent() {
  var element = document.getElementById("circle");
  
  //exercise1
  //element.firstChild.nodeValue = "Clicked";
  
  //exercise2
  //element.style.backgroundColor = 'blue';

  //exercise3
  //element.style.opacity = 0.5;

  //exercise4
  //element.style.opacity = 1;

  //exercise5a
  //var circleOpacity = parseFloat(element.style.opacity);
  //element.style.opacity = circleOpacity + 0.1;

  //exercise5b
  //var circleOpacity = parseFloat(element.style.opacity);
  //element.style.opacity = circleOpacity - 0.1;
}

function myClickCircleEvent() {
  var element = document.getElementById("circle");
  element.style.opacity = 0.5;
  element.addEventListener("click", changeContent);
}

function myInterval() {
  var element = document.getElementById('circle');
  var circleOpacity = element.style.opacity;
  element.style.opacity = circleOpacity - 0.01;
}

function myClickEvent() {
  setInterval(myInterval, 100);
}

// function myLoadEvent() {
//   var element = document.getElementById('circle');
//   element.addEventListener('click', myClickEvent);
//   element.style.opacity = 1;
// }

// function myKeyDown(event) {
//   // var element = document.getElementById('circle');
//   // var positionLeft = element.offsetLeft;
//   // element.style.left = positionLeft - 10 + 'px';
//   console.log(event.keyCode);
// }
var interval = 0; 
function myKeyDown(event) {
  clearInterval(interval);
  if (event.keyCode == 37) {
    interval = setInterval(moveLeft, 10);
  }
  if (event.keyCode == 38) {
    interval = setInterval(moveUp, 10);
  }
  if (event.keyCode == 40) {
    interval = setInterval(moveDown, 10);
  }if (event.keyCode == 39) {
    interval = setInterval(moveRight, 10);
  }
}

function moveUp() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';
}

function moveDown() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
}

function moveLeft() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';
}

function moveRight() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
}

function myLoadEvent() {
  document.addEventListener('keydown', myKeyDown);
}



document.addEventListener('DOMContentLoaded', myLoadEvent); //myClickCircleEvent); //myLoadEvent);
