let buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickPattern = [];
var started = false;
var level = 0;

$(document).on("keydown", function () {
  if (level === 0) {
    nextSequence();
  }
});

$("button").on("click", function (e) {
  userChosenColour = e.target.id;
  userClickPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickPattern.length - 1);
});

function checkAnswer(currentLevel) {
  console.log(gamePattern);
  console.log(userClickPattern);
  if (userClickPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("Success");
    if (gamePattern.length === userClickPattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
  }
}

function nextSequence() {
  userClickPattern=[];
  level++;
  $("#level-title").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
  $(`#${randomChosenColour}`).on("click", () => {
    playSound(randomChosenColour);
  });
}
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

animatePress = (currentColour) => {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(function () {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
};
