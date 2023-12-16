//creating function
function studentNames(firstName, lastName){
    let fullName = []; 
    for(let i = 0; i<firstName.length && i < lastName.length; i++){
        let sum = (i + 1) + "." + firstName[i] + " " + lastName [i]; // sum e eden item koj ke bide vo nizata dodaden;  i + 1 e za numeric value pred first and last name
        fullName.push(sum); //dodavanje elementi vo niza
                 
    }
        
    return fullName;
}

let first = ["Tamara", "Marija", "Trajce"];
let last = ["Najdovska", "Ristevska", "Petkovski"];

console.log(studentNames(first,last));