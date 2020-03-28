console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', e=>{
    loadImages();
    loadBreeds();
})
function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => addImage(json))
}


    function addImage(json){
        const imgContainer = document.querySelector('#dog-image-container')

        json.message.forEach(dog => {
            const img = document.createElement('img');
            img.src = ` ${dog}`
            imgContainer.appendChild(img)
        })
    }
    function loadBreeds(){
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => addBreed(json))
    }

    function addBreed(json){
        const ul = document.querySelector('#dog-breeds');
        
        for(const key in json.message){

            const li = document.createElement('li')
            li.innerHTML = key
            ul.appendChild(li)

            // chang the breeds color 
            colors = ['Blue', 'Purple', 'Pink', 'Red', 'Orange', 'Light Orange',	'Green', 'Blue-Grey','Yellow']
            li.addEventListener('click', e=>{
                li.style.color = colors[Math.floor(Math.random() * colors.length)];
        });
        }
    }
    


