//Elements
const html = {
    alphabetDiv: document.getElementById("alphabet"),
    cities: document.getElementById("cities"),
    lives: document.getElementById("lives"),
    clue: document.getElementById("clue"),
    boxHangmen: document.getElementById("boxHangmen"),
    btnHint: document.getElementById("hint"),
    btnPlayAgain: document.getElementById("playAgain")

}

//arays
const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const europeanCities = [
    "Paris","Berlin","Madrid","Rome","Athens","Lisbon","Prague","Budapest","Munich","Milan","Skopje","Sofia","Barcelona","Belgrade"
];

const hints = ["City in France", "City in Germany", "City in Spain", "City in Italy", "City in Greece", "City in Portugal", "City in Czech Republic", "City in Hungary", "City in Germany", "City in Italy", "City in Macedonia", "City in Bulgaria", "City in Spain", "City in Serbia",]

let word = europeanCities[Math.floor(Math.random() * europeanCities.length)]; //da bira grad od nizata
console.log(word); //Selected word to guess
let wordInArray = word.split("") // to put word in array
console.log(wordInArray)
let result = word.replace(/[a-z]/g,'_') // to replace the letters with "_"
let resultArray = result.split("") // to put in array
let lives = 6 ; //lives counter
let guesses = []; //to store the guesses
let errors = []; // to store errors


html.alphabetDiv = alphabetButtons(alphabetArray)
html.cities.innerHTML += `<p>${resultArray}</p>`;


//create alphabet buttons
function alphabetButtons(array){
    for(let i = 0; i< array.length; i++){
        html.alphabetDiv.innerHTML += `<button style="font-size: larger;" onclick="btnClick(alphabetArray[${i}])">${array[i]}</button>` //to create buttons with even click for every letter
    }

}

function btnClick(alphabetArray){ //for click event
    for(let i = 0;  i<alphabetArray.length; i++){
        for(let y = 1; y< wordInArray.length; y++){

            if(alphabetArray[i].match(wordInArray[y])){ //to check if the word has the letter
                resultArray[y]=`${alphabetArray[i]}` // if it has to replace it in result2 array
                guesses.push(`${resultArray[y]}`) // pushing in guesses array
                console.log(guesses)
                
                html.cities.innerText = ""
                html.cities.innerText += ` ${resultArray}` //to display the correct letter
                
            }
            
        }
              
        check(alphabetArray);
    }
}            




html.btnHint.addEventListener("click", function(){
    let wordIndex = europeanCities.indexOf(word)
    html.clue.innerHTML += `<p><b>Clue: ${hints[wordIndex]}</b></p> `
})


html.btnPlayAgain.addEventListener("click", function(){
    location.reload(true) //to reload page
    
})


function check (array){
    for(let i = 0; i<array.length; i++){
        if (word.indexOf(array[i])<=0){ //to check if the word include letter
            errors.push(array[i]) 
            console.log(errors)
            lives-=1 
                   
            switch(lives){                  
                case 5:
                    html.lives.innerHTML = `<b>You have left ${lives} lives.</b>`  
                    html.boxHangmen.innerHTML = '<img src="../pictures/2.png" alt="Hanging man" width="400" height = "190"></img>'
                break;
                    case 4:
                    html.lives.innerHTML = `<b>You have left ${lives} lives.</b>`  
                    html.boxHangmen.innerHTML = '<img src="../pictures/3.png" alt="Hanging man" width="400" height = "190"></img>'
                break;
                case 3:
                    html.lives.innerHTML = `<b>You have left ${lives} lives.</b>`  
                    html.boxHangmen.innerHTML = '<img src="../pictures/4.png" alt="Hanging man" width="400" height = "190"></img>'
                break;
                case 2:
                    html.lives.innerHTML = `<b>You have left ${lives} lives.</b>`  
                    html.boxHangmen.innerHTML = '<img src="../pictures/5.png" alt="Hanging man" width="400" height = "190"></img>'
                break;
                case 1:
                    html.lives.innerHTML = `<b>You have left ${lives} lives.</b>`  
                    html.boxHangmen.innerHTML = '<img src="../pictures/6.png" alt="Hanging man" width="400" height = "190"></img>'
                break;
                case 0:
                    html.lives.innerHTML = `<b>You have left ${lives} lives.</b>`  
                    html.boxHangmen.innerHTML = '<img src="../pictures/7.png" alt="Hanging man" width="400" height = "190"></img>'
                    alert("You lose! Game over!")
                break;
                
            }
        }

    
    }

    if( guesses.length === wordInArray.length-1){
        alert("You Win!")
    }
   


}


    


