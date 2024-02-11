// Use the https://jsonplaceholder.typicode.com/todos.
// First, get the todo with id 1 (https://jsonplaceholder.typicode.com/todos/1).
// Then, log the todo from the response
// First, get the todo with id 1 (https://jsonplaceholder.typicode.com/todos).
// Then, log the todo from the response, then use the userId from the response and get the details for that user (https://jsonplaceholder.typicode.com/users/[userId])
// Log the details for the user



let userId = document.getElementById("userId")
let btn = document.getElementById("btn")

//get user toDo
async function getUserIdFromApi (id){
    try{
        let userResponse = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        let parsedUserObject = await userResponse.json()
        console.log(`Title: ${parsedUserObject.title}. Completed: ${parsedUserObject.completed}`)
        
    }
    catch(error){
        console.log(error)
    }
}

//get user info
async function getUserDetailsFromApi(id){
    try{
        let userDetailsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        let parsedUserDetailsResponse = await userDetailsResponse.json()
        console.log(`The user with id ${id} is ${parsedUserDetailsResponse.name} with username ${parsedUserDetailsResponse.username}. User e-mail:${parsedUserDetailsResponse.email}. User is living in ${parsedUserDetailsResponse.address.city} on "${parsedUserDetailsResponse.address.street}" street and is working for "${parsedUserDetailsResponse.company.name}".`)
    
        console.log(parsedUserDetailsResponse)
    }
    catch(error){
        console.log(error)
    }
}

btn.addEventListener("click", function(event){
    event.preventDefault()
    if(!userId.value){
        console.log("Please enter number")
        return
    }
    getUserIdFromApi(userId.value)
    getUserDetailsFromApi(userId.value)

})

