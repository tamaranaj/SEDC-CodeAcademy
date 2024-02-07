// Use the https://jsonplaceholder.typicode.com/todos.
// First, get the todo with id 1 (https://jsonplaceholder.typicode.com/todos/1).
// Then, log the todo from the response
// First, get the todo with id 1 (https://jsonplaceholder.typicode.com/todos).
// Then, log the todo from the response, then use the userId from the response and get the details for that user (https://jsonplaceholder.typicode.com/users/[userId])
// Log the details for the user



let userId = document.getElementById("userId")
let btn = document.getElementById("btn")


function getUserIdFromApi (id){
    return new Promise((resolve, reject)=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(function(response){
            return response.json()
        })
        .then(function(userObject){
            resolve(userObject)
        })
        .catch(function(error){
            reject(error)
        })
    })
    
}

function getUserDetailsFromApi(id){
    return new Promise((resolve, reject)=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(function(response){
            return response.json()
        })
        .then(function(userObject){
            resolve(userObject)
        })
        .catch(function(error){
            reject(error)
        })
    })
}



function callUserDetails(id){
    getUserDetailsFromApi(id)
    .then(function(userDetails){
        console.log(userDetails)
        
    })
    .catch(function(error){
        console.log(error)
    })    
}

function result(){
    getUserIdFromApi(userId.value)
    .then(function(userObject){
        console.log(`Title: ${userObject.title}. Completed: ${userObject.completed}`)
        callUserDetails(userObject.id)
        
    })
    .catch(function(error){
        console.log(error)
    })
}

btn.addEventListener("click", function(event){
    event.preventDefault()
    if(!userId.value){
        console.log("Please enter number")
        return
    }
    
    result()
})

