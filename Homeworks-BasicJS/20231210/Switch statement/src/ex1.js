// exercise 1/ class02
//for client to enter money and convert the string to number
let money = parseInt(prompt("Enter how much mkd denar you currently have:"));


// switch statement
switch(true){
    case money >= 500 && money < 1000 :
        alert(`You have ${money} denari and you can go to some coffee bar.`);
    break;
    case money >= 1000 && money < 2000 :
        alert(`You have ${money} denari and you can go to cinema.`);
    break;
    case money >= 2000 :
        alert(`You have ${money} denari and you can have dinner with friends.`);
    break;
    case money <= 400 && money >= 100 :
        alert(`You have ${money} denari and you can go to Central park.`);
    break;
    case money <= 99 && money >= 0 :
        alert(`You have ${money} denari and you need to find a job.`);
    break;
    default:
        alert("You didn't enter money.");
    break;
}


