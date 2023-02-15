const refs = {
  formRef: document.querySelector(".login-form"),
  inputEmailRef: document.querySelector('[type = "email"]'),
  inputPasswordRef: document.querySelector('[type="password"]'),
  buttonRef: document.querySelector('[type="submit"]'),
};

refs.formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (refs.inputEmailRef.value === "" || refs.inputPasswordRef.value === "") {
    alert("все поля должны быть заполнены");
  }
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;
  const formElementObject = {
    email,
    password,
  };
  console.log(formElementObject);
  event.target.reset();
}
