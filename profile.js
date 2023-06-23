let btn = document.querySelector(".btn");
let lol = document.querySelector(".lol");
lol.addEventListener("mouseenter", show_btn);

function show_btn() {
  btn.style.opacity = 1;
  btn.style.transform = "translateY(0px)";
}
