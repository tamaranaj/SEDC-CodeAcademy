//PROMPT
function Animal(name, kind) {
    this.name = name;
    this.kind = kind;
    this.speak = function(message){
         console.log(`${this.kind} ${this.name} says: '${message}'`);
    }
    
}

let animalName = prompt("Enter the name of the animal:");
let animalKind = prompt("Enter the kind of the animal:");
let message = prompt("Enter the message for the animal to speak:");

let animal = new Animal(animalName, animalKind, message);


console.log(animal.speak(message))


///INPUTS

// function Animal (name, kind){
//     this.name = name;
//     this.kind = kind;
// }

// let inputs = document.getElementsByTagName ("input")
// let nameAnimal = inputs[0]
// let kindAnimal = inputs[1]
// let message = inputs[2].value
// let btn = document.getElementsByTagName("button")[0]

// btn.addEventListener("click", function(){
//     let animal = new Animal (nameAnimal.value, kindAnimal.value)
//     animal.speak = function (message){
//         console.log(`${this.kind} ${this.name} says: '${message}'`);
//     }

//     animal.speak(inputs[2].value); 
// })