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

let word = europeanCities[Math.floor(Math.random() * europeanCities.length)]; //to choose city
console.log(word); //Selected word to guess
let wordInArray = word.split("") // to put word in array
console.log(wordInArray)
let result = word.replace(/[a-z]/g,'_') // to replace the letters with "_"
let resultArray = result.split("") // to put in array
let lives = 6 ; //lives counter
let guesses = []; //to store the guesses
let errors = []; // to store errors


html.alphabetDiv = alphabetButtons(alphabetArray)
html.cities.innerHTML += `<p>${resultArray.join(" ")}</p>`;

//create alphabet buttons
function alphabetButtons(array) {
  
  for (let i = 0; i< array.length; i++) {
    let btnLetter = document.createElement("button")
    html.alphabetDiv.appendChild(btnLetter)
    btnLetter.setAttribute("id", `${array[i]}`)
    btnLetter.textContent = `${array[i]}`
    btnLetter.addEventListener("click", function (event) {
      event.preventDefault()
      btnClick(array[i]);
    });
  }
}

function btnClick(letter){ //for click event
  
  for(let y = 1; y< wordInArray.length; y++){

    if(letter.match(wordInArray[y])){ //to check if the word has the letter
      resultArray[y]=`${letter}` // if it has to replace it in result2 array
      if(guesses.includes(resultArray[y])){
        guesses.push(`${resultArray[y]}`) // pushing in guesses array
        console.log(guesses)
      }       
      html.cities.innerText = ""
      html.cities.innerText += ` ${resultArray.join(" ")}` //to display the correct letter    
    }    
  } 
  check(letter);
}            

html.btnHint.addEventListener("click", function(){
  html.clue.innerHTML = ""
  let wordIndex = europeanCities.indexOf(word)
  html.clue.innerHTML += `<p><b>Clue: ${hints[wordIndex]}</b></p> `
})

html.btnPlayAgain.addEventListener("click", function(){
  location.reload(true) //to reload page
  
})


function check (letter){
  
  if (word.indexOf(letter)<0){ //to check if the word include letter
    console.log(word.indexOf(letter))
    errors.push(letter) 
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
        playQuestion()
      break;      
    }   
  }

  if ( resultArray.join("") === word && lives > 0){
    alert("You Win!")
    playQuestion()
  }
}

function playQuestion(){
  if(confirm("play again?")){
    location.reload(true)
  }
}