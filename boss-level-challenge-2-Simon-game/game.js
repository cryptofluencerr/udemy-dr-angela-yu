let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let usedClickPattern = [];
let started = false;
let level = 0;

$(document).on("keydown", function () {
  if (!started) {
    nextSequence();
    $("#level-title").text("Level " + level);
    started = true;
  }
});

nextSequence = () => {
  level++;
  let randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  // console.log($.type(".row"));
  $("button").on("click", function () {
    let userChosenColour = this.id;
    usedClickPattern.push(userChosenColour);
    // console.log(usedClickPattern);
  });
  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
  $(`#${randomChosenColour}`).on("click", () => {
    let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
  });
};
playSound = (name) => {
  $("button").on("click", (e) => {
    let audio1 = new Audio("sounds/" + e.target.id + ".mp3");
    audio1.play();
  });
};

animatePress = () => {
  $("button").click(function (e) {
    e.preventDefault();
    console.log(e.target.id);
    $(`#${e.target.id}`).addClass("pressed");
    setTimeout(function () {
      $(`#${e.target.id}`).removeClass("pressed");
    }, 50);
  });
};

animatePress();
playSound();
