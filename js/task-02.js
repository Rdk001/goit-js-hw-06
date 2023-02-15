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
    const el = document.createElement("li");
    el.textContent = elem;
    el.classList.add("item");
    return el;
  });
  return elements;
};

const itemsEl = makeList(ingredients);

const listEl = document.querySelector("#ingredients");
listEl.append(...itemsEl);
console.log(listEl);
