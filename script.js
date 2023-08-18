let w = 0;
let h = 0;
let king = document.querySelector(".king");
let txt = document.querySelector(".status");
let close = 0;

document.addEventListener("mousemove", (e) => {
  if (close === 100) {
    window.location.href = "http://localhost:5500/profile.html";
  }

  w = e.x / 2;
  h = e.y / 2;
  bw = e.x / 90;
  king.style.width = w + "px";
  king.style.height = h + "px";

  close = Math.abs(1 - e.x / e.y) * -100 + 100;
  txt.innerText =
    "You are " +
    close.toFixed(2) +
    "% close to making a perfect circle to save this innocent cat. ";
});
