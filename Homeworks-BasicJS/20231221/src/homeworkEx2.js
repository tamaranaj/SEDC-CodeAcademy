let array = [3, 57, 13, 21, 7, 81, 56, 28, 44]

let div = document.getElementById("result");

//first function
function numbers(listItems,element){
    let unorderedList = "";
    for(let i = 0; i<listItems.length; i++){
        unorderedList += `<li>${listItems[i]}</li>`; 
    }
    element.innerHTML += `<ul>${unorderedList}</ul>`
}
numbers(array,div);

//second function
function sumNumbers(num){
    let sum = 0;
   for(let i = 0; i<num.length; i++){
    sum = sum + num[i]
   }
   return sum
}
function mathArray (numbers){
    let sum = 0
    for(let y=0; y<numbers.length; y++){
        if(y===numbers.length-1){
            sum += numbers[y] + "="
        }else{
            sum+=(numbers[y] +"+")
        }
        
        
    }
    return sum;
}
//creating new paragraph
div.innerHTML += `<p class="first"></p>`;
let paragraph = document.getElementsByClassName("first")[0];
paragraph.innerText = `The sum of list numbers is ${mathArray(array)}${sumNumbers(array)}.`
