//Paint Search result list
function paintList() {
  let html = "";
  for (const item of showsList) {
    console.log(item.language);
    let favClass;
    if (isShowFav(item)) {
      favClass = "favourite";
    } else {
      favClass = "";
    }
    let recomendedText;
    if (isRecomendedShow(item)) {
      recomendedText = "Recomendada";
    } else {
      recomendedText = "";
    }

    html += `<li class = "js-shows ${favClass} showli" id=${item.id}>`;
    html += `<h3 class="showli__title">${item.name}</h2>`;
    if (item.image === null) {
      html += `<img src= ${imgDefault} class= "showli__image" title="image default">`;
    } else {
      html += `<img src= ${item.image.medium} class= "showli__image" title="show image">`;
    }
    html += `${recomendedText}`;
    html += "</li>";
  }
  ulShowList.innerHTML = html;
  paintFavList();
  listenShowsEvents();
}

function isRecomendedShow(item) {
  let languages = ["English", "Spanish", "Portuguese"];
  return languages.includes(item.language);
  /*if (languages.includes(item.language) === true) {
    return true;
  } else {
    return false;
  }*/
}

//Check if show is fav or not
function isShowFav(item) {
  const favoriteFound = favoritesList.find((favorite) => {
    return favorite.id === item.id;
  });
  if (favoriteFound === undefined) {
    return false;
  } else {
    return true;
  }
}

//Paint Favorite List
function paintFavList() {
  let html = "";
  for (const item of favoritesList) {
    html += '<div class= "favli-container">';
    html += `<li class = " favli" id=${item.id}>`;
    html += `<h3 class="favli__title">${item.name}</h2>`;
    if (item.image === null) {
      html += `<img src= ${imgDefault} class= "favli__img">`;
    } else {
      html += `<img src= ${item.image.medium} class= "favli__img">`;
    }
    html += `<button class='favli__button js-remove' id=${item.id}>Eliminar</button>`;
    html += "</li>";

    html += "</div>";
  }
  ulFavList.innerHTML = html;

  listenRemoveFavElements();
}
