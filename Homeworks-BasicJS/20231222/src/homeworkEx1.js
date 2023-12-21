alert("Let's create dynamic table")
//using DOM to get to div and input elements
let divTable = document.getElementById("table-container");
let rows = document.getElementById("row")
let columns = document.getElementById("column")
let button = document.getElementById("btn");

//adding even listener click on button create
button.addEventListener("click", function (){
    divTable.innerHTML += `<table id="table"><caption class="captionTable">Dynamic Table</caption></table>`;  
    let table = document.getElementById("table");
    dynamicTable(rows.value, columns.value, table )
    table.style.border = "2px double black"
    table.style.width = "80%"
    table.style.textAlign = "center" 
    table.style.backgroundColor = "lightblue"
    
})


function dynamicTable(tableRow, tableColumn, element){
    let table =''
    for(let a = 0; a<tableRow; a++){
        table += `<tr style="border: 1px double black">`   
        for(let b = 0; b<tableColumn; b++){
            table += `<td style="border: 1px double black">Row${a + 1}, Column ${b + 1}</td>`   
        } 

        table += `</tr>`
    }
    
    
         
    element.innerHTML += `${table}`
    
}


