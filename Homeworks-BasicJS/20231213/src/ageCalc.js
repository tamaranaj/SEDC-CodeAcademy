//Declaring function
function calculateAge(birthYear, currentYear){
    let result = currentYear - birthYear;
    return result;
    
}
// creating variable with Data object
let currentDate = new Date();
// creating variable with prompt value for client to enter year
let birthday = parseInt(prompt("Enter your year of birth if you forgot how old are you"));


if (birthday === 0 || birthday > currentDate.getFullYear()){ 
    console.log(birthday);
    console.log("Error");
    
}else if(birthday <= currentDate.getFullYear()){
 
    console.log(`You are ${calculateAge(birthday, currentDate.getFullYear())} years old`);
}else{
    console.log("you didnt entered value")
}


   


