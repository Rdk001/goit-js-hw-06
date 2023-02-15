function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyRef: document.body,
  buttnoRef: document.querySelector(".change-color"),
  spanRef: document.querySelector(".color"),
};

refs.buttnoRef.addEventListener("click", changeColor);

function changeColor(event) {
  refs.bodyRef.style.backgroundColor = getRandomHexColor();
  refs.spanRef.textContent = refs.bodyRef.style.backgroundColor;
}
