//Changing first div element
//h1
let firstH1 = document.getElementById("myTitle");
firstH1.innerText = "Learning DOM in JS!";
console.log(firstH1.innerText);
//paragraph
let firstParagraph = document.getElementsByClassName("paragraph")[0];
console.log(firstParagraph);
firstParagraph.innerText = "Hello, I'm student in SEDC Academy and I'm learning Basic JavaScript.";
firstParagraph.style.color = "violet";
firstParagraph.style.font = "2em Ariel"
//Changing second div element
//paragraph
let secondParagraph = document.getElementsByClassName("paragraph")[1];
secondParagraph.innerText = "This is a homework exercise.";
secondParagraph.style.color = "violet";
secondParagraph.style.font = "2em Ariel"
//text
let text = document.getElementsByTagName("text")[0];
text.innerText += " changing content & design."
text.style.color = "violet";
text.style.font = "2em Ariel"

//last div
let divs = document.getElementsByTagName("div");
console.log(divs.length);
let lastDiv = divs[2];
console.log(lastDiv.children)
let childH1 = lastDiv.children[0]
childH1.innerText = "I have 2 more exercises to do!"
let childH3 = lastDiv.children[1]
childH3.innerText = "Byee!"
childH3.style.color = "violet";
childH3.style.font = "2em Ariel"

//changing div style
//first div
divs[0].style.display = "flex"
divs[0].style.flexFlow = "column wrap"
divs[0].style.justifyContent = "center"
divs[0].style.alignItems = "center"
//second div
divs[1].style.display = "flex"
divs[1].style.flexFlow = "column wrap"
divs[1].style.justifyContent = "center"
divs[1].style.alignItems = "center"
//last div
lastDiv.style.display = "flex"
lastDiv.style.flexFlow = "column wrap"
lastDiv.style.justifyContent = "center"
lastDiv.style.alignItems = "center"