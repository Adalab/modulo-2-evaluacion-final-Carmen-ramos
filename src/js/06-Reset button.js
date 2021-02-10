function resetFav() {
  favoritesList = [];
  paintFavList();
  paintList();
  setInLocalStorage();
}
resetFavButton.addEventListener("click", resetFav);
