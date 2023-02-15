const refs = {
  inputRef: document.querySelector("#font-size-control"),
  spanRef: document.querySelector("#text"),
};
console.log(refs.inputRef);
console.log(refs.spanRef);

refs.inputRef.addEventListener("input", changeOfSize);

function changeOfSize(event) {
  const sliderValue = event.currentTarget.value;
  refs.spanRef.style.fontSize = `${sliderValue}px`;
}
