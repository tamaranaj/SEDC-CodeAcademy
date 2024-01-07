// Bob's salary is 1000 eur per month. He has expenses that has to cover during the month. He has to pay rent for his apartment 375 eur. He should pay 250 eur for his bills in total. Print on screen what is the amount left that Bob has for the rest of the month, and what is the total amount of his expenses.

let salary = 1000
let rent = 375
let bills =250

function calc (a, b, c){
    let result = a-(b+c)
    let expenses = b + c
    console.log(`He has left ${result} euro`)
    console.log(`He has expenses ${expenses} euro`)
}

calc(salary, rent, bills)