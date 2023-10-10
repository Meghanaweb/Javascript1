const bgimageel = document.getElementById("bgimage");
window.addEventListener("scroll", () => {
  bgimageel.style.opacity = 1 - window.pageYOffset / 900;
});
