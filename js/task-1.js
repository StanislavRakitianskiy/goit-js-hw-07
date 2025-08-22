const list = document.querySelector("#categories");
const listItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listItem.length}`);
listItem.forEach((elem) => {
  const title = elem.querySelector("h2").textContent;
  const elementsCount = elem.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
  elem.querySelector("h2").classList.add('animals-title');
  elem.querySelectorAll("li").forEach(elem => elem.classList.add('animals-text'));
  elem.classList.add('animals-bg');
});
