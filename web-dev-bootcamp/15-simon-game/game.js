/*
  1. add JS and jQuery
  2. create a new pattern
  3. show the sequence to the user with animations and sounds
  4. check which button is pressed
  5. add sounds and animations to user click
  6. start the game
  7. check user's answer against the game sequence
  8. game over & restart
*/

// STEP 2 - array to hold colors sequence
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;

//  keep track of whether if the game has started or not
var started = false;


// STEP 7 - Start the Game

// Use jQuery to detect when a keyboard key has been pressed, 
// when that happens for the first time, call nextSequence()

$(document).keypress(function () {

  if (!started) {
    // the h1 title starts out saying "Press A Key to Start",
    // when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);

    nextSequence();

    started = true;
  }

});

// STEP 4 - Check Which Button is Pressed

// Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
// jQuery has a .click() function

$(".btn").click(function () {
  // create a new variable to store the id of
  // the button that got clicked(red, blue, etc)
  // use the keyword this to refer to the button object that triggered the click
  //  use the attr() function in jQuery to find out the value of any of the attributes of an object
  var userChosenColour = $(this).attr("id");

  // add newly chosen button to user clicked pattern array
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  // STEP 8 - Call checkAnswer() after a user has clicked and chosen their answer, 
  // passing in the index of the last answer in the user's sequence
  checkAnswer(userClickedPattern.length - 1);
});

// STEP 8 - Check the User's Answer Against the Game Sequence
// function called checkAnswer(), take one input with the name currentLevel
function checkAnswer(currentLevel) {
  
  // check if the most recent user answer is the same as the game pattern.
  // if so then log "success", otherwise log "wrong"
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    // check that they have finished their sequence
    // and call nextSequence() after a 1000 millisecond delay.
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  else {

    // STEP 9 - Game Over
    console.log("wrong");
    playSound("wrong");

    // apply game-over class to the body of the website
    // remove it after 200ms
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    // change h1 title
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}



function nextSequence() {

  // once nextSequence() is triggered,
  // reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  // increase the level by 1 every time nextSequence() is called
  // update the h1 with this change in the value of level
  // h1 has a unique id of level-title
  level++;
  $("#level-title").text("Level " + level);

  // STEP 2 - Create A New Pattern

  // create a random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);

  // select random colour from the buttonColours array
  var randomChosenColour = buttonColours[randomNumber];
  // add new generated colour to the end of game pattern
  gamePattern.push(randomChosenColour);

  // STEP 3 - Show the Sequence to the User with Animations and Sounds

  // use jQuery to select the button with the same id as the random chosen colour
  // animate a flash to the button & play sound
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

// STEP 5 - Add Sounds to Button Clicks
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// STEP 6 - Add Animations to User Clicks

function animatePress(currentColour) {
  // Use jQuery to add this pressed class
  // to the button that gets clicked inside animatePress()
  $("#" + currentColour).addClass("pressed");

  // use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// STEP 10 - Restart the Game
// reset values of level, gamePattern and started variable
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
