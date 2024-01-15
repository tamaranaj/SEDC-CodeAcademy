//Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g. Already read 'The Robots of dawn' by Isaac Asimov. (if true)You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

//first way
let nameOfBook = prompt("Enter name of some book")
let nameOfAuthor = prompt("Enter the name of author")
let bookStatus = confirm("Is this book read?")


function Book (name, author, readingBook){
    this.name = name;
    this.author = author;
    this.readingBook = readingBook;
    this.readingStatus = function(){
        if(this.readingBook){
            console.log(`Already read ${this.name} from ${this.author}`)
        }else{
            console.log(`You still need to read ${this.name} from ${this.author}`)
        }
    }
}

function creatingBookProgram(){
    if(!nameOfBook||!nameOfAuthor){        
        console.log("Enter inputs")
        return
    }
    let result = new Book(nameOfBook,nameOfAuthor,bookStatus)

    console.log(result.readingStatus())

}
creatingBookProgram()



//second way

// const book = {
//     title: nameOfBook,
//     author: nameOfAuthor,
//     readingStatus: bookStatus,
    
//     readOrNot : function(){
//         if(this.readingStatus){
//             console.log(`Already read ${this.title} from ${this.author}`)
//         }else{
//             console.log(`You still need to read ${this.title} from ${this.author}`)
//         }
    
            
//     }
// }
    
// book.readOrNot();




