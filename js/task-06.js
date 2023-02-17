const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onCorrectNumberOfCharacters);

function onCorrectNumberOfCharacters(event) {
  if (
    event.currentTarget.value.length !==
    Number(event.currentTarget.dataset.length)
  ) {
    event.currentTarget.classList.remove("valid");
    event.currentTarget.classList.add("invalid");
  } else {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  }
}
