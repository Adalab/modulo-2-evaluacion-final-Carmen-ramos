"use strict";
const inputEl = document.querySelector(".js-input");
const buttonEl = document.querySelector(".js-button");
//const apiurl = 'http://api.tvmaze.com/search/shows?q='
const ulShowList = document.querySelector(".js-showList");
const ulFavList = document.querySelector(".js-favList");
const sectShowList = document.querySelector(".js-section-showlist");
let imgDefault = "././assets/images/tvSeries.jpg";
let showsList = [];
let favoritesList = [];

function getApiData() {
  getFromLocalStorage();
  const inputValue = inputEl.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      showsList = [];
      for (let i = 0; i < data.length; i++) {
        showsList.push(data[i].show);
      }
      paintList();
    });
}
buttonEl.addEventListener("click", getApiData);

// form preventDefault
const formElement = document.querySelector(".js-form");
function handleForm(ev) {
  ev.preventDefault();
}
formElement.addEventListener("submit", handleForm);

// paint
function paintList() {
  let html = "";
  for (const item of showsList) {
    let favClass; //meter en una funcion mejor?
    if (isShowFav(item)) {
      favClass = "favourite";
    } else {
      favClass = "";
    }
    html += `<li class = "js-shows ${favClass} showli" id=${item.id}>`;
    html += `<h3 class="showli__title">${item.name}</h2>`;
    if (item.image === null) {
      html += `<img src= ${imgDefault} class= "showli__image" title="image default">`;
    } else {
      html += `<img src= ${item.image.medium} class= "showli__image" title="show image">`;
    }
    html += "</li>";
  }
  ulShowList.innerHTML = html;
  paintFavList();
  listenShowsEvents();
}

//favourite or not  // REVISAR VIDEO PARA ENTENDER.
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

//listen cards shows events //
function listenShowsEvents() {
  const showElements = document.querySelectorAll(".js-shows");
  for (const showElement of showElements) {
    showElement.addEventListener("click", handleShow);
  }
}
// handle
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

//Paint favorite List
function paintFavList() {
  let html = "";
  for (const item of favoritesList) {
    html += '<div class= "favli-container">';
    html += `<li class = "js-shows favli" id=${item.id}>`;
    html += `<h3 class="favli__title">${item.name}</h2>`;
    if (item.image === null) {
      html += `<img src= ${imgDefault} class= "favli__img">`;
    } else {
      html += `<img src= ${item.image.medium} class= "favli__img">`;
    }
    html += "<button class='favli__button'>Eliminar</button>";
    html += "</li>";
<<<<<<< HEAD
    html += '<button class ="js-reset">X</button> ';
=======
    html += "</div>";
>>>>>>> master
  }
  ulFavList.innerHTML = html;

  listenShowsEvents();
}

//reset fav button.
const resetFavButton = document.querySelector(".js-reset");
function resetFav() {
  favoritesList = [""];
  ulFavList.innerHTML = "";
}
console.log(ulFavList);
resetFavButton.addEventListener("click", resetFav);

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

getFromLocalStorage();
