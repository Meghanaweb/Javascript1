const iamgecontainerel = document.querySelector(".image-container");
const btnel = document.querySelector(".btn");
btnel.addEventListener("click", () => {
  imagenum = 15;
  addnewiamges();
});
function addnewiamges() {
  for (let index = 0; index < imagenum; index++) {
    const newimage = document.createElement("img");
    newimage.src = `https://picsum.photos/300?random=
    ${Math.floor(Math.random() * 2000)}`;
    iamgecontainerel.appendChild(newimage);
  }
}
