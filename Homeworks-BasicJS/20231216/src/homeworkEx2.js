//creating array
let numbersArray = [7, 13, 45, 81, 100,"jfhfj", "ass"];

//creating function
function calculate (array) {
    let sum = 0
    for(let i = 0; i<array.length; i++){
        if(typeof(array[i]) === "number"){
            sum += array[i];  
        }else{
            console.log("Invalid number found")
           
        }

        
    }

    console.log(sum)
    return sum;
}
//calling
calculate(numbersArray);

