function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanColor = document.querySelector(".color");
const btnBg = document.querySelector(".change-color");
const elementP = document.querySelectorAll("p");
const bodyElement = document.body;
btnBg.addEventListener("click", () => {
  let newColor = getRandomHexColor();
  spanColor.textContent = newColor;
  bodyElement.style.backgroundColor = newColor;
});
elementP[1].classList.add('text-bg')
