//Reset button for all favorites
function resetFav() {
  favoritesList = [];
  paintFavList();
  paintList();
  setInLocalStorage();
}
resetFavButton.addEventListener("click", resetFav);
