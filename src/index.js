document.addEventListener("DOMContentLoaded", () => {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const dogContainer = document.querySelector("#dog-image-container");
const dogBreeds = document.querySelector("#dog-breeds");
const dropdown = document.querySelector("#breed-dropdown");
let breeds = [];

    let imgArray = fetch(imgUrl)
    .then( res => res.json())
    .then ( json => {
        for (let i=0; i<json.message.length; i++){
            let image = document.createElement("img");
            image.src = json.message[i];
            dogContainer.appendChild(image);

        } 
    })
    let breedArray = fetch(breedUrl)
        .then(res => res.json())
        .then(json => {
            breeds.push(Object.keys(json.message))
        createBreedItems();
        })
    
    function createBreedItems(){
        breeds[0].filter(checkFirstLetter).forEach(breed => {
            let breedItem = document.createElement('li');
            breedItem.textContent = breed;
            dogBreeds.appendChild(breedItem);
            breedItem.addEventListener("click", () => {
            breedItem.style.color = 'pink';
        })

        dropdown.addEventListener("change", showOnly);

        })
    }
    
    function showOnly(e){
        deleteBreedList();
        createBreedItems();
    }

    function deleteBreedList(){
       while (dogBreeds.hasChildNodes()){
           dogBreeds.removeChild(dogBreeds.firstChild)
       }
    }

    function checkFirstLetter(breed){
       return breed.split("")[0] === dropdown.value;
    }
})
