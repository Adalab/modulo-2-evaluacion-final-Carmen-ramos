//Listen  shows events //
function listenShowsEvents() {
  const showElements = document.querySelectorAll(".js-shows");
  for (const showElement of showElements) {
    showElement.addEventListener("click", handleShow);
  }
}

//Listen element fav button.
function listenRemoveFavElements() {
  const removeButtons = document.querySelectorAll(".js-remove");
  for (const removeButton of removeButtons) {
    removeButton.addEventListener("click", handleRemoveFavElements);
  }
}
