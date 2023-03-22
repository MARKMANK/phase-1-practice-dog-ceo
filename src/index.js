//console.log('%c HI', 'color: firebrick')

const imgUrl1 = "https://dog.ceo/api/breeds/image/random/4";
const imgUrl2 = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded',function(){
    console.log("The DOM has loaded");

    // fetch(imgUrl1)
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(object){
    //     console.log(object);
    //     const dogContainer = document.getElementById("dog-image-container")
    //     object.message.forEach((dogImg) => {
    //         const element = document.createElement("img");
    //         element.src = dogImg
    //         dogContainer.append(element)
    //     })
    // })

    fetch(imgUrl2)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        const dogContainer = document.getElementById("dog-breeds")
        const myObject = object.message;
        Object.keys(myObject).forEach((dogName) => {
            const element = document.createElement("li");
            element.id = dogName
            element.textContent = dogName
            dogContainer.append(element)
        })

        const dogArray = document.getElementById("dog-breeds").getElementsByTagName("li");
        for(let i=0; i<dogArray.length; i++){
            dogArray[i].addEventListener('click',function(){
              console.log("We just clicked!");
              dogArray[i].style.color = "green";
            })
        }

        const dropDown = document.getElementById("breed-dropdown");
        dropDown.addEventListener('change',function(){
            console.log(dropDown.value);
            const returnsDogArray = Object.keys(myObject).filter((breedName) => 
            {return breedName[0].toUpperCase() == dropDown.value})
            console.log(returnsDogArray)

            dogContainer.textContent = ''

            returnsDogArray.forEach((dogName) => {
                const element = document.createElement("li");
                element.id = dogName
                element.textContent = dogName
                dogContainer.append(element)
          })
        })

    })
});

