// Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values). Create a function that will work for every array in the world :) and it will remove all the falsy values from the array

let array = [null, undefined,NaN, "", 5, 3222, false, "Hello", 13,7]

function checkArray(array){
    return array.filter(Boolean)
    
}

let newArray = checkArray(array)
console.log("Original array:", array)
console.log("Array with no falsy items:", newArray)


