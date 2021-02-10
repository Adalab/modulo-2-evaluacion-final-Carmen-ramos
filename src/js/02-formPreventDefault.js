//Form prevent default
const formElement = document.querySelector(".js-form");
function handleForm(ev) {
  ev.preventDefault();
}
formElement.addEventListener("submit", handleForm);
