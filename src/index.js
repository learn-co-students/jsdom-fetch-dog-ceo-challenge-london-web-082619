console.log('%c HI', 'color: firebrick')

const breedUrl = "https://dog.ceo/api/breeds/list/all"

const imageContainer = document.getElementById('dog-image-container')
const ulDogBreeds = document.getElementById('dog-breeds')

// fetch images from API https://dog.ceo/api/breeds/image/random/4
// forEach create img element under id="dog-image-container"
    // imgContainer = getElementById("dog-image-container")


document.addEventListener("DOMContentLoaded", function(){
    fetchPictures()
    fetchBreeds()
})


function fetchPictures(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then (resp => resp.json())
        .then (jsonP => {
            console.log(jsonP)
            putElementArrayOnPage(jsonP["message"])
        })
    }

function fetchBreeds(){
    fetch(breedUrl)
        .then (resp => resp.json())
        .then (jsonB => {
            console.log(jsonB)
            renderBreeds(jsonB["message"])
        })
}

function arrayOfPics(object){
    // for(const key in object){
    //     object[key]
    // }
}

function putElementArrayOnPage(array){
    for(const element of array) {
        let image = document.createElement('img')
        image.src = element
        image.setAttribute("width", "200")
        imageContainer.appendChild(image)
    }
}

function renderBreeds(object) {
   for(const breed in object) {
        li = document.createElement('li')
        li.innerText = `${breed}`
        //li.addEventListener("dblclick", e => colorChange(e))
        li.addEventListener("dblclick", e => e.target.style.color = "green")
        ulDogBreeds.appendChild(li)
    }
}

function colorChange(e){
    e.target.style.color = "green"
}
