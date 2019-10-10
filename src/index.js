console.log('%c HI', 'color: firebrick')

//Challnge 1


function fetchDogs() {
    debugger;
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(jsonImages => renderDogs(jsonImages));
};

function renderDogs(jsonImages){
    const main = document.querySelector("#dog-image-container");
    jsonImages["message"].forEach(jsonImage => {
     const img = document.createElement("img")  //to create image tag
     img.src = jsonImage // image tag にimage を挿入
     main.appendChild(img) //
    })
}

document.addEventListener("DOMContentLoaded", function(){
    fetchDogs();
});