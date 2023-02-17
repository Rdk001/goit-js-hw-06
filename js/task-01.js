// 1 завдання - це усе можна було б (а краще так і зробити) набагато простіше,
//  якщо б ти просто проітерував усіх children, а там уже можна доступитись і до назв
// і до кількості його дітей.

const listEl = document.querySelector("#categories");

const numberOfCategories = listEl.children.length;
console.log("Number of categories :", numberOfCategories);

const itemFirstEL = listEl.firstElementChild;
const itemFirstTitleEl = itemFirstEL.children[0].textContent;
console.log("Category:", itemFirstTitleEl);

const itemFirstListEl = itemFirstEL.children[1];
const amuondOfElementsItemFirstEl = itemFirstListEl.children.length;
console.log("Elements:", amuondOfElementsItemFirstEl);

const itemSecondEl = listEl.children[1];
const itemSecondTitleEl = itemSecondEl.children[0].textContent;
console.log("Category:", itemSecondTitleEl);

const itemSecondListEl = itemSecondEl.children[1];
const amuondOfElementsItemSecondEl = itemSecondListEl.children.length;
console.log("Elements:", amuondOfElementsItemSecondEl);

const itemThirdEl = listEl.children[2];
const itemThirdTitleEl = itemThirdEl.children[0].textContent;
console.log("Category:", itemThirdTitleEl);

const itemThirdListEl = itemThirdEl.children[1];
const amuondOfElementsItemThirdEl = itemThirdListEl.children.length;
console.log("Elements:", amuondOfElementsItemThirdEl);
