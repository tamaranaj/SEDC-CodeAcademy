// Reminder App
// • Create a reminder app
// • * There should be:
// • * An input for entering the title
// • * An input for entering priority (Low, medium, High)
// • * An input for color
// • * A textarea for adding a description
// • * A button for adding the reminder
// • * A button for showing all reminders
// • * When the button for adding is clicked an object needs to be created with the
// properties from the inputs ( title, priority, color, and description )
// • * The object should then be added to an array of reminders
// • * When the button for showing all reminders is clicked it should show a table with title,
// priority, and description columns
// • * The title should be the color of the "color" property

//getting elements
let titleInput = document.getElementById("titleInput")
let priorityInput = document.getElementById("priorityInput")
let colorInput = document.getElementById("colorInput")
let textarea = document.getElementById("textarea")
let addBtn = document.getElementById("addBtn")
let showBtn = document.getElementById("showBtn")
let divTable = document.getElementById("table-container")

//creating object constructor function
function Reminder(title, priority, color, description){
    this.title = title 
    this.priority = priority,
    this.color = color,
    this.description = description
}

reminderArray=[]

addBtn.addEventListener("click", function(event){
    event.preventDefault()

    let title = titleInput.value
    let priority = priorityInput.value
    let color = colorInput.value
    let description = textarea.value ? textarea.value : "no description needed"

    //title and priority are required
    if(!validateInputs(title) || !validateInputs(priority)){
        return
    }
    
    let reminder = new Reminder(title, priority, color, description)
    reminderArray.push(reminder)

    //clearing inputs
    titleInput.value = ""
    priorityInput.value = ""
    colorInput.value = "#000000"
    textarea.value = ""
})


showBtn.addEventListener("click", function(event){
    event.preventDefault()
    //prevent creating table if array is empty
    if(reminderArray.length<1){
        return
    }
    
    divTable.innerHTML = ""
    divTable.innerHTML +=`<table id ="table" border=1><caption>List of reminders</caption></table>`
    let table = document.getElementById("table")
    createTable(reminderArray,table)
})

function createTable(array,element){
    for(let item of array){
        element.innerHTML += 
        `<th style = "background-color: ${item.color}">${item.title}</th>
        <td>${item.priority}</td>
        <td>${item.description}</td>`
    }
    
}

function validateInputs(input){
    let flag = true
    if(!input){
        alert("You must enter value for title and priority")
        flag = false
        return 
    }
    return flag
}
