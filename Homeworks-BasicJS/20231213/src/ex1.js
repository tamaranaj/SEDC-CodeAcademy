function myFunction(a){
    return typeof(a);
}

console.log(myFunction(true)); //boolean
console.log(myFunction(8)); //number
console.log(myFunction("8")); //string
console.log(myFunction()); //undefined
console.log(myFunction(null)); //object