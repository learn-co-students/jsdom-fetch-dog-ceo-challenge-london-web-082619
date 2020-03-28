console.log('%c HI', 'color: firebrick')

window.addEventListener("DOMContentLoaded", function() {

    const dogsList = document.getElementById("dog-breeds")

    function fetchDogsInfo() {
        fetch("https://dog.ceo/api/breeds/image/random/4")
            .then( res => res.json() )
            .then ( res => addImages(res) )
    }

        function addImages(res) {
            const dogsList = document.getElementById("dog-image-container")
            res.message.forEach( dogImageURL=> {
                let dogImageContainer = document.createElement("li") 
                let dogImage = document.createElement("img")

                dogImage.setAttribute("src", dogImageURL)

                dogImageContainer.appendChild(dogImage)
                dogsList.appendChild(dogImageContainer)
            })
        }

    function fetchBreedInfo() {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then( res => res.json() )
        .then ( res => addBreeds(res) )
    }


        function addBreeds(res) {
            const breedsListContainer = document.createElement("ul")
            dogsList.appendChild(breedsListContainer)

            let breedsList = []

            for (const key in res.message) {
                let dogBreeds = createDogBreeds(res, key);
                breedsList.push(dogBreeds)
            }

            breedsList.flat(2).forEach(function(element) {
                let dogElement = document.createElement("li")
                dogElement.textContent = element
                breedsListContainer.appendChild(dogElement)
                dogElement.addEventListener("click", function() {
                    colours = ["Navy", "Magenta", "Maroon", "Red", "LawnGreen", "Indigo", "Gold", "DodgerBlue", "DimGrey", "Cyan", "OrangeRed", "Pink"]
                    dogElement.style.color = colours[Math.floor(Math.random()*colours.length)]
                })
            })
        }

        function createDogBreeds(res, key) {
            dogBreeds = []
            if (res.message[key].length == 0) {
                dogBreeds.push(key)
            } else {
                res.message[key].forEach(function(value) {
                    dogBreeds.push(`${value} ${key}`)
            })
            }
            return dogBreeds
        }

    fetchDogsInfo()
    fetchBreedInfo()

})