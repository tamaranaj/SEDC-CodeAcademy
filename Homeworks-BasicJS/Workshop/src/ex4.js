//Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!
// Make sure you use a function!
// Ex. Input1: 20
// Input2: 80
// Output: 80 is closer to 100

let num1 = parseInt(prompt("Enter first number < 100"))
let num2 = parseInt(prompt("Enter second number < 100"))
if( num1 <= 0 || num2 <= 0){
    alert("you enter negative number")
}
function calc(a, b, c){
   let firstResult = 0;
   let secondResult = 0
   firstResult = c-a
   secondResult = c-b
   if(firstResult>secondResult){
    console.log(`number ${b} is closer to 100`)
   }else if(secondResult>firstResult){
    console.log(`number ${a} is closer to 100`)
   }else{
    console.log("You entered equals numbers")
   }


}

calc(num1, num2, 100)