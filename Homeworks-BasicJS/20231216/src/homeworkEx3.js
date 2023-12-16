
function sumOfStrings(array){
    let strings = [];
    for(let i=0; i<array.length; i++){
       strings = strings + array[i] + " ";

    }
    console.log(strings);

    return strings;
}

let stringsArray = ["check", "if", "it", "works", "?"]

sumOfStrings(stringsArray)