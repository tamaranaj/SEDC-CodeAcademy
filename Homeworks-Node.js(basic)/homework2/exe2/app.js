import fs from "fs"
import { books } from "./books.js";
//console.log(books)
function textbooks(array){
    array.forEach(element => {
        fs.appendFileSync("booksData.txt", `${element.id}.${element.title} by ${element.author} is of genre ${element.genre}. \n`)
    });
}

textbooks(books)