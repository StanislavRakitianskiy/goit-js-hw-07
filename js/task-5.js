function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanColor = document.querySelector('.color');
const btnBg = document.querySelector('.change-color');
const bodyElement = document.body;
// let result = spanColor.innerHTML = getRandomHexColor();
btnBg.addEventListener('click', () => {
  let newColor = getRandomHexColor();
  spanColor.textContent = newColor;
  bodyElement.style.backgroundColor = newColor;
})