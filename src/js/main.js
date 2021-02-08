"use strict";
const inputEl = document.querySelector(".js-input");
const buttonEl = document.querySelector(".js-button");
//const apiurl = 'http://api.tvmaze.com/search/shows?q='
const ulLI = document.querySelector(".js-showList");
const inputValue = inputEl.value;

let showsList = [];

function getApiData(ev) {
  fetch(`http://api.tvmaze.com/search/shows?q=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        showsList = data[i].show;
      }
    });
}
buttonEl.addEventListener("click", getApiData);
