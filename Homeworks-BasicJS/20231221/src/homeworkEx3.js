// Ask the user for the name of the recipe
let nameRecipe = prompt("Enter the name of recipe");


// Ask the user how many ingredients do we need for the recipe
let numOfIngredients = parseInt(prompt("How many ingredients do we need for the recipe?"));

// Ask the user for the name of every ingredient
let nameIngredients = prompt("Write all the ingredients we need and put a coma between them");

if (`${nameRecipe}`==="" ||`${numOfIngredients}`==="" || `${nameIngredients}`===""){
    alert("You didn't entered value")
} else if (nameRecipe === null || numOfIngredients === null || nameIngredients === null){
    alert("Error")
    
}

let arrayNameIngredients = nameIngredients.split(",");


// Print the name of the recipe in the HTML as heading element, ex: h1-h6
let div = document.getElementById("recipe");

//adding HTML 
div.innerHTML = `<h1>${nameRecipe}</h1>`;

// Print all ingredients as an unordered list in the HTML
function ingredientsForRecipe (ingredients,element){
    let list = "";
    for(let i=0; i<ingredients.length; i++){
        list += `<li>${ingredients[i]}</li>`
    }
    element.innerHTML += `<ul>${list}</ul>`;
}

ingredientsForRecipe(arrayNameIngredients,div)

// Extra: Use a table if you want to be fancy 
let divTable = document.getElementById("table-container");
divTable.innerHTML += `<table id="tableRecipe"><caption>Ingredients for ${nameRecipe}</caption></table>`;
let table = document.getElementById("tableRecipe")

function ingredientsTable (ingredients,element){
    let tableInfo = ''
    let i=1
    for(let y = 0; y<ingredients.length; y++){
        tableInfo+= `<tr><td>${i++}</td><td>${ingredients[y]}</td></tr>`
    }
    element.innerHTML+= `${tableInfo}`   
}
ingredientsTable(arrayNameIngredients,table)

//adding CSS to the table
table.style.backgroundColor = "coral";
table.style.width = "30%";
table.style.border = "2px solid #000";
table.style.borderCollapse = "collapse"
table.style.font = "1em Ariel";
table.style.textAlign = "center"
