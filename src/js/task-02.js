const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const makeList = (array) => {
  const elements = array.map((elem) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = elem;
    itemEl.classList.add("item");
    return itemEl;
  });
  return elements;
};

const itemsEl = makeList(ingredients);

const listEl = document.querySelector("#ingredients");
listEl.append(...itemsEl);
console.log(listEl);
