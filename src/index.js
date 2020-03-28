console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function() {
    getDogImages();
    fetchBreeds();
});

function getDogImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => {
        json.message.forEach(imageUrl => renderDogs(imageUrl))
    });
}

function renderDogs(dogPicUrl){
    let container = document.getElementById('dog-image-container')
    let newImageElement = document.createElement('img')
    newImageElement.src = dogPicUrl;
    container.appendChild(newImageElement);
};



// ------------------------------------------challenge2---------------------
function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        console.log(json)
        breeds = Object.keys(json.message);
        updateBreedList(breeds);
    })
};

function updateBreedList(breeds){
    let ul = document.getElementById('dog-breeds');
    removeChildren(ul);
    addBreedDropdownEventListener();
    breeds.forEach(breed => addBreed(breed));
};


function addBreed(breed){
    let ul = document.getElementById('dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li)
};

//----------------------------------challenge4-----------------------------

function addBreedDropdownEventListener(){
    let breedDropDown = document.getElementById('breed-dropdown');
    breedDropDown.addEventListener('change', function(event){
        selectBreedsStartingWith(event.target.value);
    });
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }

function selectBreedsStartingWith(letter){
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)))
};
