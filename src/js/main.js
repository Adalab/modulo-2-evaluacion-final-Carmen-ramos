"use strict";
const inputElement = document.querySelector(".js-input");
const buttonElement = document.querySelector(".js-button");

let shows = [];

function getApiData() {
  fetch("http://api.tvmaze.com/search/shows?q=girls")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        shows = data[i].show;
      }
    });
}
