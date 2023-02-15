const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onCorrectNumberOfCharacters);

function onCorrectNumberOfCharacters(event) {
  event.currentTarget.value.length ===
  Number(event.currentTarget.dataset.length)
    ? event.currentTarget.classList.add("valid")
    : event.currentTarget.classList.add("invalid");
}
