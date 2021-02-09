"use strict";
const inputEl = document.querySelector(".js-input");
const buttonEl = document.querySelector(".js-button");
//const apiurl = 'http://api.tvmaze.com/search/shows?q='
const ulElement = document.querySelector(".js-showList");

let showsList = [];
let favorites = [
  {
    id: 10191,
    url: "http://www.tvmaze.com/shows/10191/new-orleans-bowl",
    name: "New Orleans Bowl",
    type: "Sports",
    language: "English",
  },
];

function getApiData() {
  const inputValue = inputEl.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        showsList.push(data[i].show);
      }
      paintList();
    });
}
buttonEl.addEventListener("click", getApiData);

//preguntar form
/*const formElement = document.querySelector(".js-form");
function handleForm(ev) {
  ev.preventDefault();
}
formElement.addEventListener("submit", handleForm);*/

// Image default for shows without image.
let imgDefault = "././assets/images/tvSeries.jpg";

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
    // html += "<div class = 'container'>";
    html += `<li class = "js-shows ${favClass}" id=${item.id}>`;
    html += `<h2 class="shows__title">${item.name}</h2>`;
    if (item.image === null) {
      html += `<img src= ${imgDefault} class= "imgDefault">`;
    } else {
      html += `<img src= ${item.image.medium}>`;
    }
    html += "</li>";
    // html += "</div>";
  }
  ulElement.innerHTML = html;
  listenShowsEvents();
}

//favourite or not
/function isShowFav(item) {
  /*const favoriteFound = favorites.find((favorite) => {
    return favorite.id === item.id;
  });
  if (favoriteFound === undefined) {
    return false;
  } else {
    return true;
  }*/
}

//listen cards shows events // cambiar el show por Card????
function listenShowsEvents() {
  const showElements = document.querySelectorAll(".js-shows");
  for (const showElement of showElements) {
    showElement.addEventListener("click", handleShow);
  }
}

function handleShow(ev) {
 /* const clickedShowID = ev.currentTarget.id;
  console.log("me estan clicando", ev.currentTarget.id);
  const showFound = showsList.find((item) => {
    return item.id === clickedShowID;
  });
  console.log(showFound);*/
}

getApiData();
/*handleForm();*/
