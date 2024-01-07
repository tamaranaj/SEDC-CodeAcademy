// Write a JavaScript program called PhoneBook. You should have three input fields in the html, one for firstName, lastName and phoneNumber. After entering the values into each of them, on clicking on a “Save” button, you should display the newly added contact in a table below the inputs. Make sure the user is entering an appropriate values in the fields!
// Bonus: Add column with delete and edit button so that you can edit or delete a contact! Try to save the newly added contact as an object (literal or constructor function its up to you) and add it to an array!

let inputs = document.getElementsByTagName("input")
console.log(inputs)
let firstName = inputs[0]
let lastName = inputs[1]
let phone = inputs[2]
let phoneBook = document.getElementById("table-container")
let btnSave = document.getElementById("save")

//adding event listener on save button

btnSave.addEventListener("click", function(event){

    event.preventDefault()

    //checking input values & creating table
    if(!firstName.value || !lastName.value ||!phone.value){
        return alert("You didn't enter value")
    } else if( !isNaN(firstName.value)|| !isNaN(lastName.value) ){
        return alert("Invalid input")
    }else if(isNaN(phone.value)){
        alert("Invalid input")
        return false 
    }else{
        phoneBook.innerHTML = ''
        phoneBook.innerHTML += `<table border =1 id="table"><caption>PhoneBook</caption></table>`
        let table = document.getElementById("table")
        createTable(firstName.value, lastName.value, phone.value, table) 
        //creating array with object
        let arrayContact = []
        const contact = {
            firstName: firstName.value,
            lastName: lastName.value,
            phoneNumber: phone.value
        }
        arrayContact.push(contact);
        // console.log(arrayContact)
 
        //deleting values in inputs after saving
        firstName.value = "";
        lastName.value = "";
        phone.value= "";
 
        //adding event on click on delete button
        btnDelete.addEventListener("click", function(){
            phoneBook.innerHTML = ""
            firstName.value = "";
            lastName.value = "";
            phone.value= "";
        })
     
 
        //adding event on click on edit button
        btnEdit.addEventListener("click", function (){
            firstName.value = contact.firstName;
            lastName.value = contact.lastName;
            phone.value = contact.phoneNumber;
            phoneBook.innerHTML = ""
        })
    }

})



function createTable(a,b,c,element){
    let tableRow = `<tr><td>First name: ${a}</td><td>Last name: ${b}</td><td>Phone number: ${c}</td><td><button id="btnEdit" style="background-color: rgba(147, 84, 84, 0.923);">Edit contact</button></td>
    <td><button id="btnDelete" style="background-color: rgba(147, 84, 84, 0.923);">Delete contact</button></td></tr>`
    element.innerHTML += tableRow
}






