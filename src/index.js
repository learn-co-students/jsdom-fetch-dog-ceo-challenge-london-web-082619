console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const dogImageContainer = document.getElementById("dog-image-container");
const dogBreedList = document.getElementById("dog-breeds");
const breedDropdown = document.getElementById("breed-dropdown")

document.addEventListener("DOMContentLoaded", () => {
    fetchBreedData();
    fetchImgData();
    breedDropdown.addEventListener("change", event => filterDogBreeds(event) );
})

//CHALLENGE 1

function fetchImgData(){
    fetch(imgUrl)
      .then( res => res.json() )
      .then( dogs => renderDogs(dogs) )
}

function renderDogs(dogs){
    // debugger;
    dogs["message"].forEach(dog => {
        renderDog(dog)
    })
}

function renderDog(dog) {
    newDogImage = document.createElement('img')
    newDogImage.src = dog
    newDogImage.alt = "this is a dog"
    dogImageContainer.appendChild(newDogImage)
}

// CHALLENGE 2

function fetchBreedData(){
    fetch(breedUrl)
      .then( res => res.json() )
      .then( dogBreeds => renderDogBreeds(dogBreeds) )
}

function renderDogBreeds(dogBreeds){
    // debugger;
    Object.keys(dogBreeds["message"]).forEach(dogBreed => {
        renderDogBreed(dogBreed)
    })
}

function renderDogBreed(dogBreed) {
    newDogBreed = document.createElement('li')
    newDogBreed.innerText = dogBreed
    newDogBreed.addEventListener('click', event => changeFontColour(event) )
    dogBreedList.appendChild(newDogBreed)
}

// CHALLENGE 3

function changeFontColour(event) {
    breedText = event.target
    breedText.style.color = "red"
}

// CHALLENGE 4

function filterDogBreeds(event) {
    event.preventDefault();
    let letter = event.target.value;
    liList = dogBreedList.getElementsByTagName('li')

    for ( let i = 0; i < liList.length; i++ ) {
        liList[i].style.display = ""; 
    }

    for ( let i = 0; i < liList.length; i++ ) {
        // debugger;
        if (liList[i].textContent[0] != letter) {
            liList[i].style.display = "none"; 
        } 
    }
}

