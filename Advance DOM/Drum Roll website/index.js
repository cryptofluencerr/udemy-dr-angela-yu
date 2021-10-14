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
  document.querySelectorAll(".drum")[i].addEventListener("click", function (e) {
    let audio = new Audio(`${musicObj[this.innerHTML]}`);
    audio.play();
  });
  document.addEventListener("keydown", function (e) {
    let audio1 = new Audio(`${musicObj[e.key]}`);
    audio1.play();
    console.log(e.key);
});
}

