//Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.
// Make sure you use a function!
// Ex. Input: 20 ==> Output: 14

let num1 = 13;
let num2 = parseInt(prompt("Enter number:"));
function calc(num1, num2){
    
    if(num1>num2){
        console.log (`The difference between is:`)
        console.log (num1 -num2)
        
    }else if(num1<num2){
        console.log(`The difference between is:`)
        console.log(2*(num2-num1))
    }
    else{
        console.log("you didn't enter number")
    }

}

calc(num1, num2)
