//creating function
function numbers(array){
    let min = +Infinity
    let max = -Infinity
    for(let i = 0; i<array.length; i++){
        
        if(typeof(array[i])==="number" && array[i] < min){//da proveri dali ima data type number i ako e broj dali e pomal od min 
            min = array[i]
            
        }

        if (typeof(array[i])==="number" && array[i]> max){//da proveri dali ima data type number i ako e broj dali e pogolem od max 
            max = array[i]
            
        }
    }
    let sum = max + min// zbir od min i max
    console.log(`The smallest number in array is ${min}, the largest is ${max}, and their sum is ${sum}`)
    
}

let arraysOfNumbers = [13, "Hello", 5,"m", 9, "c", 26,"d", 378, 31, 90, true, 84]
numbers(arraysOfNumbers); //povikuvanje na funkcijata