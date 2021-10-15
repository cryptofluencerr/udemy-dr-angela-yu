let buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];

nextSequence = () => {
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];

  $("#" + randomChosenColour).on("click", function () {
    let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    $("#" + randomChosenColour).addClass("pressed");
    setTimeout(function () {
      $("#" + randomChosenColour).removeClass("pressed");
    }, 50);
  });
  return "sounds/" + randomChosenColour + ".mp3";
};

console.log(nextSequence());
