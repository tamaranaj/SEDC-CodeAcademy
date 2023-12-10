// exercise 2/ class 02

//for client to enter a year and convert the input from string to number
let year = parseInt(prompt("Enter year to calculate which Chinese Zodiac a given year is in:"))

//the formula to calculate 
let formula = (year - 4) % 12;

//switch statement
switch(formula){
    case 0:
        console.log("Rat");
    break;
    case 1:
        console.log("Ox");
    break;
    case 2:
        console.log("Tiger");
    break;
    case 3:
        console.log("Rabbit");
    break;
    case 4:
        console.log("Dragon");
    break;
    case 5:
        console.log("Snake");
    break;
    case 6:
        console.log("Horse");
    break;
    case 7:
        console.log("Goat");
    break;
    case 8:
        console.log("Monkey");
    break;
    case 9:
        console.log("Rooster");
    break;
    case 10:
        console.log("Dog");
    break;
    case 11:
        console.log("Pig");
    break;
    default:
        alert("You didn't eneter a year");
    break;
         
}
