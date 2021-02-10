// handle for Show List
function handleShow(ev) {
  const clickedShowID = parseInt(ev.currentTarget.id);
  //buscar el contenido del elemento clickado.
  const showObjClicked = showsList.find((item) => {
    return item.id === clickedShowID;
  });
  // favoritesFound me va a dar si el elemento clickado esta en fav o no. Sino se encuentra nos devueve -1
  const favoritesFound = favoritesList.findIndex((favorite) => {
    return favorite.id === clickedShowID;
  });

  if (favoritesFound === -1) {
    favoritesList.push(showObjClicked);
  } else {
    favoritesList.splice(favoritesFound, 1);
  }
  setInLocalStorage();
  paintFavList();
  paintList();
}

//handle for remove button
function handleRemoveFavElements(ev) {
  const clickedShowFavID = parseInt(ev.currentTarget.id);
  const favoritesFound = favoritesList.findIndex((favorite) => {
    return favorite.id === clickedShowFavID;
  });
  if (favoritesFound !== -1) {
    favoritesList.splice(favoritesFound, 1);
  }
  setInLocalStorage();
  paintFavList();
  paintList();
}
