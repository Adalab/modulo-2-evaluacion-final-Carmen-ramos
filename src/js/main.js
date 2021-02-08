"use strict";
const inputEl = document.querySelector(".js-input");
const buttonEl = document.querySelector(".js-button");
//const apiurl = 'http://api.tvmaze.com/search/shows?q='
const ulElement = document.querySelector(".js-showList");
const inputValue = inputEl.value;

let showsList = [];

function getApiData() {
  fetch(`http://api.tvmaze.com/search/shows?q= ${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        showsList.push(data[i].show);
      }
    });
  paintList();
}
buttonEl.addEventListener("click", getApiData);

// paint
function paintList() {
  let html = "";
  for (const item of showsList) {
    html += "<div class = 'container'>";
    html += "<li class = 'shows'>";
    html += `<h2 class="shows__title">${item.name}</h2>`;
  }
  html += "</li>";
  html += "</div>";
  ulElement.innerHTML = html;
}

getApiData();
