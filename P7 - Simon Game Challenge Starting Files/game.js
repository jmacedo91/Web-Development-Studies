var userClickedPattern = [];
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;
var isGameStarted = false;


$(document).keydown(function () {
  if (!isGameStarted) {
    $("#level-title").text("Level " + level);
    nextSequence();
    isGameStarted = true;
  }
});

// $(".btn").on("click", function (event) {
//   var userChosenColour = event.target.id;
//   userClickedPattern.push(userChosenColour);
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
// });

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

///////////////////////////// Functions ////////////////////////////////////////
function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  level++;
  $("#level-title").text("Level: " + level);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
};

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

function animatePress(currentColour) {
  // Add Class Gray
  $("#" + currentColour).addClass("pressed");
  // Delay to remove the Class
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed", 100);
  })};

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence()}, 1000);
    }
  } else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    // Delay to remove the Class
    setTimeout(function () {
      $("body").removeClass("game-over", 200);
    });
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  isGameStarted = false;
}
////////////////////////////////////////////////////////////////////////////////
