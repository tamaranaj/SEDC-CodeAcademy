// Write a JavaScript program called PhoneBook. You should have three input fields in the html, one for firstName, lastName and phoneNumber. After entering the values into each of them, on clicking on a “Save” button, you should display the newly added contact in a table below the inputs. Make sure the user is entering an appropriate values in the fields!
let inputs = document.getElementsByTagName("input")
console.log(inputs)
let firstName = inputs[0]
let lastName = inputs[1]
let phone = inputs[2]
let phoneBook = document.getElementById("table-container")
let btn = document.getElementsByTagName("button")[0]

//adding event listener on button element

btn.addEventListener("click", function(){
   if(typeof(firstName.value)===null || firstName.value==="" || typeof(lastName.value)===null || lastName.value==="" ||typeof(phone.value)===null || phone.value=== ""){
    alert("error");
    return;
   }
    phoneBook.innerHTML = ''
    phoneBook.innerHTML += `<table id="table"><caption>PhoneBook</caption></table>`
    let table = document.getElementById("table")
    createTable(firstName.value, lastName.value, phone.value, table) 
   
   
    
    
    
})
 

function createTable(a,b,c,element){
    let tableRow = `<tr><td>First name: ${a}</td><td>Last name: ${b}</td><td>Phone number: ${c}</td></tr>`
    element.innerHTML += tableRow
}



// Bonus: Add column with delete and edit button so that you can edit or delete a contact! Try to save the newly added contact as an object (literal or constructor function its up to you) and add it to an array!