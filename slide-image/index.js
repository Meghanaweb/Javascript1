const containerel = document.querySelector(".container");
const sildeimagecontainerel = document.querySelector(".slideimagecontainer");
const btnel = document.querySelector(".btn");
btnel.addEventListener("click", () => {
  updateimage();
});
function updateimage() {
  const newimage = document.createElement("img");
  newimage.src = `https://picsum.photos/300?random=
${Math.floor(Math.random() * 2000)}`;
  sildeimagecontainerel.appendChild(newimage);
}
