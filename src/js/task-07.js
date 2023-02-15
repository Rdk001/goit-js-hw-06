// Напиши скрипт который реагирует на изменение значения
//  input#font-size-control (событие input) и изменяет инлайн-стиль span#text
//   обновляя свойство font-size. В результате при перетаскивании ползунка
//    будет меняться размер текста.

const refs = {
  inputRef: document.querySelector("#font-size-control"),
  spanRef: document.querySelector("#text"),
};
console.log(refs.inputRef);
console.log(refs.spanRef);
