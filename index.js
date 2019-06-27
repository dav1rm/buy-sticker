var addButtonElement = document.querySelector("#add");
var subtractButtonElement = document.querySelector("#subtract");
var inputElement = document.querySelector(".counter input");

var reactCheckElement = document.querySelector("#react");
var vueCheckElement = document.querySelector("#vue");
var angularCheckElement = document.querySelector("#angular");

var formElement = document.querySelector(".form");
var messageElement = document.querySelector(".footer span");

var quantity = 0;

function renderElements() {
  inputElement.value = quantity;

  if (quantity <= 0) {
    subtractButtonElement.disabled = true;
  } else {
    subtractButtonElement.disabled = false;
  }
}
renderElements();

function onChangeValue(e) {
  if (e.target.value < 0) {
    quantity = 0;
  } else {
    quantity = e.target.value;
  }
  renderElements();
}
inputElement.onchange = onChangeValue;

function add() {
  inputElement.value = quantity++;
  renderElements();
}
addButtonElement.onclick = add;

function subtract() {
  inputElement.value = quantity--;
  renderElements();
}
subtractButtonElement.onclick = subtract;

function onSubmitForm(e) {
  e.preventDefault();

  if (quantity === 0) {
    // add class error in input and message
    inputElement.classList.add("error");
    messageElement.classList.add("error");

    messageElement.innerHTML = "A quantidade deve ser maior que 0";
    return;
  } else if (
    !reactCheckElement.checked &&
    !vueCheckElement.checked &&
    !angularCheckElement.checked
  ) {
    // removes class error int input
    inputElement.classList.remove("error");

    // adds class erro in checkboxes and message
    reactCheckElement.classList.add("error");
    vueCheckElement.classList.add("error");
    angularCheckElement.classList.add("error");
    messageElement.classList.add("error");

    messageElement.innerHTML =
      "Por favor, escolha pelo menos um tipo de sticker";
    return;
  } else {
    // removes all errors
    messageElement.classList.remove("error");
    reactCheckElement.classList.remove("error");
    vueCheckElement.classList.remove("error");
    angularCheckElement.classList.remove("error");
    inputElement.classList.remove("error");

    messageElement.innerHTML = "Formulário enviado com sucesso!";
  }
}

formElement.onsubmit = onSubmitForm;
