window.addEventListener("DOMContentLoaded", runScripts);

function runScripts() {
  fetchImages();
  fetchBreeds();
  listenForDropdownChange();
}

function fetchImages() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => displayImages(json));
}

function displayImages(json) {
  const imageContainer = document.querySelector("#dog-image-container");

  json.message.forEach(imageURL => {
    let imageElement = document.createElement("img");
    imageElement.src = imageURL;  
    imageContainer.appendChild(imageElement);
  });
}

function fetchBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(json => displayBreeds(json));
}

const breedContainer = document.querySelector("#dog-breeds");

function displayBreeds(json) {
  const dogBreeds = Object.keys(json.message);

  dogBreeds.forEach(breed => {
    let listElement = document.createElement("li");
    listElement.addEventListener("click", makeRed);
    listElement.textContent = breed;
    breedContainer.appendChild(listElement);
  });
}

function makeRed() {
  this.style.color = "red";
}

function listenForDropdownChange() {
  const dropdown = document.querySelector("#breed-dropdown");
  dropdown.addEventListener("change", filterList);
}

function filterList() {
  const letter = this.value;
  const regex = new RegExp("^" + letter);
  const breeds = document.querySelectorAll("li");
  breeds.forEach(li => {
    li.style.display = "block";
    if (!li.textContent.match(regex)) {
      li.style.display = "none";
    }
  });
}