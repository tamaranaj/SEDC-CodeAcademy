//creating for loop
let result = ""
for(let num = 1; num<=20; num++){
    if(num % 2 === 0){ //even numbers
        result += `${num} \n`
    }else{ //odd numbers
        result += `${num} `
    }

}

console.log(result)