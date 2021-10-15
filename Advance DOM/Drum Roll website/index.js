let musicObj = {
  w: "sounds/crash.mp3",
  a: "sounds/kick-bass.mp3",
  s: "sounds/snare.mp3",
  d: "sounds/tom-1.mp3",
  j: "sounds/tom-2.mp3",
  k: "sounds/tom-3.mp3",
  l: "sounds/tom-4.mp3",
};
$(".drum").on("click", function (val) {
  val = this.innerHTML;
  let audio = new Audio(musicObj[val]);
  audio.play();
  $("." + val).addClass("pressed");
  setTimeout(function (e) {
    $("." + val).removeClass("pressed");
  }, 200);
});

$(".drum").keydown(function (e) {
  $("." + e.key).addClass("pressed");
  setTimeout(function () {
    $("." + e.key).removeClass("pressed");
  }, 200);

  let audio1 = new Audio(`${musicObj[e.key]}`);
  audio1.play();
});
