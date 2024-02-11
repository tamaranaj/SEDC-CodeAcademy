// ## Homework

// Create a button
// When the button is clicked, call the Astros api to get astronauts
// Print them in unordered list.

// **URL:** http://api.open-notify.org/astros.json \


let callApiBtn = document.getElementById("callApi")
let astroList = document.getElementById("astroList")



fetch("http://api.open-notify.org/astros.json")
    .then(function(response){
        response.json()
        
        .then(function(data){

            callApiBtn.addEventListener("click", function(event){
                event.preventDefault()
                createList(data.people, astroList)
            })
        })
        .catch(function(response){
            console.log("An error ocurred");
            console.log(response) 
        })
    })
    .catch(function(error){
        console.log("An error ocurred");
        console.log(error)
    })



function createList(array,element){
    element.innerText = ""
    for(let i=0; i<array.length; i++){
        let listItem = document.createElement("li")
        listItem.innerText = `${array[i].name}`
        element.appendChild(listItem)
        
    }
}

