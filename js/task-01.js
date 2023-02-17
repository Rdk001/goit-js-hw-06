// 1 завдання - це усе можна було б (а краще так і зробити) набагато простіше,
//  якщо б ти просто проітерував усіх children, а там уже можна доступитись і до назв
// і до кількості його дітей.

const listEl = document.querySelector("#categories");

const numberOfCategories = listEl.children.length;
console.log("Number of categories :", numberOfCategories);

for (const el of listEl.children) {
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Elements:", el.lastElementChild.children.length);
}
