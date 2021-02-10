//set in Local Storage
function setInLocalStorage() {
  localStorage.setItem("listFavLocal", JSON.stringify(favoritesList));
}

//get from local Storage
function getFromLocalStorage() {
  const localStorageFavList = localStorage.getItem("listFavLocal");
  if (localStorageFavList !== null) {
    favoritesList = JSON.parse(localStorageFavList);
    console.log(favoritesList);
    paintFavList();
  }
}
