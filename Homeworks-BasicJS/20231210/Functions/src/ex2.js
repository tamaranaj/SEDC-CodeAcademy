// exercise 2/ class 02

//for client to enter a year and convert the input from string to number
let year = parseInt(prompt("Enter year to calculate which Chinese Zodiac a given year is in:"))

//function declaration
function calendar (year) {
    let formula = (year - 4) % 12;
    if( formula == 0){
        console.log("Rat");
    }else if(formula == 1){
        console.log("Ox");
    }else if(formula == 2){
        console.log("Tiger");
    }else if(formula == 3){
        console.log("Rabbit");
    }else if(formula == 4){
        console.log("Dragon");
    }else if(formula == 5){
        console.log("Snake");
    }else if(formula == 6){
        console.log("Horse");
    }else if(formula == 7){
        console.log("Goat");
    }else if(formula == 8){
        console.log("Monkey");
    }else if(formula == 9){
        console.log("Rooster");
    }else if(formula == 10){
        console.log("Dog");
    }else if(formula == 11){
        console.log("Pig");
    }else{
        alert("You didn't eneter a year");
    }


}

//call & execute
calendar(year);


