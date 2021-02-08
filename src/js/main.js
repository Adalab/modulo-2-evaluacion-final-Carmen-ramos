"use strict";
const inputEl = document.querySelector(".js-input");
const buttonEl = document.querySelector(".js-button");
//const apiurl = 'http://api.tvmaze.com/search/shows?q='
const ulElement = document.querySelector(".js-showList");

let showsList = [];

function getApiData() {
  const inputValue = inputEl.value;
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        showsList.push(data[i].show);
      }
    });
  paintList();
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
    html += "<div class = 'container'>";
    html += `<li class = "shows" id=${item.id}>`;
    html += `<h2 class="shows__title">${item.name}</h2>`;
    if (item.image === null) {
      html += `<img src= ${imgDefault} class= "imgDefault">`;
    } else {
      html += `<img src= ${item.image.medium}>`;
    }
    html += "</li>";
    html += "</div>";
  }
  ulElement.innerHTML = html;
}

getApiData();
/*handleForm();*/
