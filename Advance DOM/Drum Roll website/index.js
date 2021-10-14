let numberOfButtons = document.querySelectorAll(".drum").length;
let musicObj = {
  w: "sounds/crash.mp3",
  a: "sounds/kick-bass.mp3",
  s: "sounds/snare.mp3",
  d: "sounds/tom-1.mp3",
  j: "sounds/tom-2.mp3",
  k: "sounds/tom-3.mp3",
  l: "sounds/tom-4.mp3",
};

console.log(numberOfButtons);
for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    Audio(`${musicObj.this.innerHTML}`);
    Audio.play();
  });
}
