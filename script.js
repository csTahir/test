let searchString = "";
let searchResult = [];
const searchButton = document.getElementById("searchBtn");
searchButton.addEventListener("click", search);

function search() {
  searchString = document.getElementById("searchQuery").value;
  let numberOfResults = document.getElementById("numberOfResullts").value;
  searchLink =
    "https://customsearch.googleapis.com/customsearch/v1?cx=436353cd2d1c646eb&num=" +
    numberOfResults +
    "&q=" +
    searchString +
    "&key=AIzaSyBgb4O5ghq2bYQc06TaiEgeeReH8SqAfMk";
  fetch(searchLink)
    .then((response) => response.json())
    .then((data) => {
      searchResult = data["items"];
      searchResult = searchResult.map((item) => item["snippet"]);
      showResult(searchResult);
    });
}

function showResult(data) {
  let resultDiv = document.getElementById("resultItems");
  resultDiv.innerHTML = "";
  data.forEach((element) => {
    let item = document.createElement("li");
    item.innerHTML = element;
    resultDiv.appendChild(item);
  });
}
