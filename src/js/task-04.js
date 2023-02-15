const counterValue = document.querySelector("#value");
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const counter = {
  value: 0,
  decrement() {
    this.value -= 1;
  },

  increment() {
    this.value += 1;
  },
};

decrementBtnEl.addEventListener("click", () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});
incrementBtnEl.addEventListener("click", () => {
  counter.increment();
  counterValue.textContent = counter.value;
});
