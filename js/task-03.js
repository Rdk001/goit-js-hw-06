// =========================================================
// const listEl = document.querySelector(".gallery");
// console.log(listEl);

// const makeItemEl = (array) => {
//   const galleryItemEl = array.map((obj) => {
//     const images = document.createElement("img");
//     images.classList.add("image");
//     images.src = obj.url;
//     images.alt = obj.alt;
//     images.width = 300;
//     const item = document.createElement("li");
//     item.classList.add("item");
//     item.append(images);

//     return item;
//   });
//   return galleryItemEl;
// };

// const galleryItemEl = makeItemEl(images);

// listEl.append(...galleryItemEl);
// ====================================================

// const listEl = document.querySelector(".gallery");

// function createTemplateImg({ url, alt }) {
//   return `<li><img src=${url} alt=${alt} class="image"></li>`;
// }

// const galleryItemEl = images.map(createTemplateImg);

// console.log(galleryItemEl);
// listEl.insertAdjacentHTML("beforeend", ...galleryItemEl);
// console.log(listEl);
// ============================================================
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const listEl = document.querySelector(".gallery");

const galleryItemEl = images.map(
  (item) => `<li><img src=${item.url} alt='${item.alt}' class="image"/></li>`
);

listEl.insertAdjacentHTML("beforeend", galleryItemEl.join(""));
