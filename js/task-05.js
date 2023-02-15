const input = document.querySelector("#name-input");
console.log(input);
const span = document.querySelector("#name-output");
console.log(span);

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    span.textContent = "Anonimus";
  } else {
    span.textContent = event.currentTarget.value;
  }
}
console.log(span.textContent);
