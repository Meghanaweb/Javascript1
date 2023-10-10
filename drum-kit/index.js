const kits = ["crash", "kick", "snare", "tom"];
const containerel = document.querySelector(".container");
kits.forEach((kit) => {
  const btnel = document.createElement("button");
  btnel.classList.add("btn");
  btnel.innerText = kit;
  btnel.style.backgroundImage = "url(images/" + kit + ".png";

  containerel.appendChild(btnel);
  const audioel = document.createElement("audio");
  audioel.src = "audio/" + kit + ".mp3";
  containerel.appendChild(audioel);
  btnel.addEventListener("click", () => {
    audioel.play();
    window.addEventListener("keydown", (event) => {
      if (event.key === kit.slice(0, 1)) {
        audioel.play();
      }
    });
  });
});
