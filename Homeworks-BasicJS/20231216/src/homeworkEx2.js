//creating array
let numbersArray = [7, 13, 45, 81, 100];

//creating function
function calculate (array) {
    let sum = 0
    for(let i = 0; i<array.length; i++){
        sum += array[i];
    }

    console.log(sum)
    return sum;
}
//calling
calculate(numbersArray);


//BONUS EXERCISE
function validateNumber(array, num){
    
    for(let i=0; i<array.length; i++){
        if(array[i] === num){
            console.log(`The number ${num} is valid`);
            return num; //proveruva dali nekoj item od niza e ednakov so baraniot broj
        }
    }
    console.log(`There is no ${num} in the list!`);
    

}

validateNumber(numbersArray, 150);