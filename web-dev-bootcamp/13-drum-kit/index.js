
// count number of buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for loop to add event listener to each button
for (var i = 0; i < numberOfDrumButtons; i++) {

  // query selector all will be an array
  // listen to clicking on the button

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // get button type from this.innerHTML
    var button = this.innerHTML;

    // function with argument button
    makeSound(button);
    buttonAnimation(button);

  });

}

// event listener to the whole document page
// listening to keyboard press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      // play audioin javascript
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

// change css style to pressed button

function buttonAnimation(key) {

  // get the html element
  var activeButton = document.querySelector("." + key);

  // add class pressed to that button
  // so that css style will change
  activeButton.classList.add("pressed");

  // set interval, timeout so that 
  // after a certain amout of time the button will be back to normal
  
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}
