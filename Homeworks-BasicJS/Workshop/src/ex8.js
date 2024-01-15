// Write a JavaScript function called storyTeller(), that will take as an input parameters the input fields values from the html!
// ex: storyTeller(who, what, when);
// In the function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Example: Lancelot was a really strong knight in the middle age!")

let input1 = document.getElementById("who")
let input2 = document.getElementById("what")
let input3 = document.getElementById("when")
let btn = document.getElementsByTagName("button")[0]
let divStory = document.getElementById("story")

btn.addEventListener("click", function(){
    if(!input1.value || !input2.value || !input3.value){
        console.log("Please enter valid inputs")
        return
    }

    divStory.innerHTML = ''
    divStory.innerHTML += `<p>This is the story created by you: ${storyTeller(input1.value, input2.value, input3.value)}</p>`;
    
    input1.value = ""
    input2.value = ""
    input3.value = ""
    
})
function storyTeller(who, what, when){
    return `${who} ${what} ${when}.`
}



