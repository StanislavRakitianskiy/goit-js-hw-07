const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
input.addEventListener("input", (elem) => {
  const value = elem.currentTarget.value.trim();
  span.textContent = value === "" ? "Anonymous" : value;
});
