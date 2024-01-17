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
                astroList.innerText = ""
                for(let i=0; i<data.people.length; i++){
                    let listItem = document.createElement("li")
                    listItem.textContent = `${data.people[i].name}`
                    astroList.appendChild(listItem)
                }
            })
        })
        .catch(function(response){
            console.log("An error ocurred");
            console.log(response) 
        })
    })
    .catch(function(response){
        console.log("An error ocurred");
        console.log(response)
    })