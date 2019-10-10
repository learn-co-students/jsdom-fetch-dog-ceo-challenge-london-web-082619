console.log('%c HI', 'color: firebrick')

//Challnge 1 
function fetchDogs() {
    // debugger;
    return fetch("https://dog.ceo/api/breeds/image/random/4") // data -> message:[array]
    .then(resp => resp.json())
    .then(jsonImages => renderDogs(jsonImages));
};

//Challenge 1
function renderDogs(jsonImages){
    const main = document.querySelector("#dog-image-container"); //tergetを定める
    jsonImages["message"].forEach(jsonImage => { //挿入開始
     const img = document.createElement("img")  //挿入先のタグを作る
     img.src = jsonImage // image tag にimage を挿入
     main.appendChild(img) //mainの下に子nodeを作ってそこに挿入
    })
}

// //Challenge 2
// function fetchDogBreeds(){
//  debugger;
//  return fetch("https://dog.ceo/api/breeds/list/all") //data -> message: {[array]}
//  .then(resp => resp.json())
//  .then (jsonBreeds => renderDogBreeds(jsonBreeds));
// };

// //Challnge 2
// function renderDogBreeds(jsonBreeds){
//     const main2 = document.querySelector("#dog-breeds"); // in an ul. ul must be used with liS
//     for (const key in jsonBreeds["message"]){ //挿入開始
//         const li = document.createElement("li") //ulはliが必要
//         li.innerHTML = key
//         main2.appendChild(li)
//     }
// }



document.addEventListener("DOMContentLoaded", function(){
    fetchDogs(); //Challenge 1
    fetchDogBreeds(); //Challenge 2 and Challenge 3
});