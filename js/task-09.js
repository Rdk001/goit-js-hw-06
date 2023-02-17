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
  const color = getRandomHexColor();
  refs.bodyRef.style.backgroundColor = color;
  refs.spanRef.textContent = color;
}
