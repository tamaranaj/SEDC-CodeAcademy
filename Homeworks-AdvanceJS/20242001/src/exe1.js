// Create an html page with a table and a button. When the button is clicked show results for the first 10 planets from the Star Wars api. The information in the table are:
// Planet Name
// Population
// Climate
// Gravity
// There should be a function that makes the call to the api for the planets ( should have URL for a parameter ) There should be a function that prints planets in to the table **API URL: ** https://swapi.dev/api/planets/?page=1
// After the user clicks the button to get the first 10 planets, a button should be shown below the table that says: NEXT 10. When the button is clicked you should make another call and get the next 10 planets and change the table contents with information about the next 10 planets. After the next 10 planets are shown the button NEXT 10 should disapear and a new button PREVIOUS 10 should appear. The previous button should return the first 10 planets in the table and hide the PREVIOUS 10 button and show the NEXT 10 button.

// **API URL: ** https://swapi.dev/api/planets/?page=2

let table = document.getElementById("tablePlanets")
let btnDiv = document.getElementById("buttons")
let btnPage1 = document.getElementById("btn01")

function callApi(url){
    fetch(url)
        .then(function(response){
            response.json()
            .then(function(data){
                console.log(data);
                createTable(data.results,table)
            })
        })
        
        .catch(function(error){
            console.error("Error fetching data: ", error)
        })
}

function createTable(data,element){
    element.innerHTML = ""
    for(let array of data){
        element.innerHTML += `<tr><td>${array.name}</td><td>${array.climate}</td><td>${array.gravity}</td><td>${array.population}</td></tr>`
    }
}

btnPage1.addEventListener("click", event =>{
    event.preventDefault()   
    callApi('https://swapi.dev/api/planets/?page=1')
    let btnPage2 = document.createElement("button")
    btnPage2.innerText = `Page 02`
    btnDiv.appendChild(btnPage2)
    btnPage2.addEventListener("click", event =>{
        event.preventDefault()   
        btnPage2.remove()
        callApi('https://swapi.dev/api/planets/?page=2')
        
    })
})

