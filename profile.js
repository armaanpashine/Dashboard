let btn = document.querySelector(".btn");
let lol = document.querySelector(".lol");
lol.addEventListener("mouseenter", show_btn);

startTime();

function show_btn() {
  btn.style.opacity = 1;
  btn.style.transform = "translateY(0px)";
}
let mySound = new Audio("villager.mp3");
lol.addEventListener("click", play_sound);
function play_sound() {
  mySound.play();
}
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector(".time").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
