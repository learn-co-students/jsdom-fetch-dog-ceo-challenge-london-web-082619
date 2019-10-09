document.addEventListener("DOMContentLoaded", () => {
    let breeds = [];
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imgContainer = document.getElementById('dog-image-container');
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    const breedList = document.getElementById('dog-breeds');
    const dropdown = document.getElementById('breed-dropdown');

    fetch(imgUrl)
        .then( res => res.json() )
        .then(json => {
            for (let i=0; i<json.message.length; i++){
                let img = document.createElement('img');
                img.src = json.message[i]
                imgContainer.appendChild(img);
            }
        })


    fetch(breedUrl)
        .then( res => res.json() )
        .then(json => {
            breeds.push(Object.keys(json.message))
            createBreedItems()
        })


    function createBreedItems(){
        breeds[0].filter(checkFirstLetter).forEach(breed => {
                let breedItem = document.createElement('li');
                breedItem.innerHTML = breed;
                breedList.appendChild(breedItem);
                breedItem.addEventListener('click', changeColour)
            })
            dropdown.addEventListener('change', showOnly);
    }

    function changeColour(){
        this.style.color = 'green';
    }

    function deleteBreedList(){
        while (breedList.hasChildNodes()){
            breedList.removeChild(breedList.firstChild)
        }
    }

    function showOnly(){
        deleteBreedList();
        createBreedItems();
    }

    function checkFirstLetter(breed){
        return breed.split("")[0] == dropdown.value;
    }

});



