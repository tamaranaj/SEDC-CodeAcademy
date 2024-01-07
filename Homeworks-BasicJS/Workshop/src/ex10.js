//Make a TODO app for yourself. You should have only one input and “Add” button. After clicking on the Add button, display the newly added task that you need to do in an unordered list. Each new todo should be saved into an array.
// Bonus: Add checkbox to each of the tasks in the unordered list, and after checking a task, it should cross trough the text! Try making the ToDo an object that needs to have two properties: Name and isCompleted properties

let arrayInputs = []
let input = document.getElementById("task")
let btnAdd = document.getElementById("btnAdd")
let toDoList = document.getElementById("toDoList")

btnAdd.addEventListener("click", function(){

    if (!input.value) {
        alert("You didn't entered task to do.");
        return;
    }

    let liObject = {
        name: input.value,
        isCompleted: false,
    }
    
    arrayInputs.push(liObject);

   
    createList(arrayInputs);
    input.value = ""
})

function createList(array){
    toDoList.innerHTML = "";

    for (let i=0; i< array.length; i++) {

        let liItem = document.createElement("li")
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = array[i].isCompleted

        checkbox.addEventListener("change", function(){
            arrayInputs[i].isCompleted = !arrayInputs[i].isCompleted
            createList(arrayInputs)
        });

        let liItemText = document.createTextNode(array[i].name)

        if(array[i].isCompleted){
            liItem.style.textDecoration = "line-through";
        }
        liItem.appendChild(checkbox)
        liItem.appendChild(liItemText)
        
        toDoList.appendChild(liItem)

    }

}
