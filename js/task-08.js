const refs = {
  formRef: document.querySelector(".login-form"),
  buttonRef: document.querySelector('[type="submit"]'),
};

refs.formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;
  if (email === "" || password === "") {
    alert("все поля должны быть заполнены");
  } else {
    const formElementObject = {
      email,
      password,
    };
    console.log(formElementObject);
    event.target.reset();
  }
}
