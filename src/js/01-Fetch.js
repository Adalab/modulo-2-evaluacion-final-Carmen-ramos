//Get information from Api
getFromLocalStorage();
function getApiData() {
  const inputValue = inputEl.value;
  fetch(`//api.tvmaze.com/search/shows?q=${inputValue}`)
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
