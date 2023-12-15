//klientot da izbere kakov conver saka i da vnese godini
let clientQuestion = prompt("Enter dog to calculate dog years or human for human years");
let year = parseInt(prompt("Enter your dog years"));


function calculator (years){
        
    if (clientQuestion === "dog") { //ako odbere da mu izracuna vo dog years
        result = years * 7;
    }else if(clientQuestion === "human"){ // ako odbere vo covecki
        result = years / 7;
    }

    return result;
   
}

console.log(calculator(year));