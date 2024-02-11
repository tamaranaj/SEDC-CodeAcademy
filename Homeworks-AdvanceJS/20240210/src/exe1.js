//TASK 1
// Create 3 object templates. Library, Book and Author. 
//The structure should be: Library
// Name - string
// Books - array of Book
// Address - string
// NumberOfMembers - number of books * 15, not settable
// Print books - method that prints all books in console
function Library(name, books, address){
    this.name = !name ? "unnamed" : name;
    this.books = !books ? [] : books;
    this.address = !address ? "no address" : address;
    this.numberOfMembers = this.books.length * 15;
    this.printBooks = function(){
        if(this.books){
            this.books.forEach(book=> console.log(book))
        }
    }
    this.addBook = function(someBook){
        let newBook = Object.create(someBook)
        this.books.push(newBook)
    }
}
// Add a method AddBook to Library. This method should accept a book and use the Object.create method, to create an object with the same properties as the parameter and then add it to the Books array.
// Book
// Title - string
// Genre - string
// Libraries - array of libraries where the book can be found
// Authors - array of Author
// AddLibrary - accepts a library and adds it to the array
// RemoveLibrary - accepts a library and removes it from the array
function Book(title, genre, libraries, authors){
    this.title = !title ? "no title" : title;
    this.genre = !genre ? "no genre" : genre;;
    this.libraries = !libraries ? [] : libraries;
    this.authors = !authors ? [] : authors;
    this.addLibrary = function(library){
        this.libraries.push(library)
        library.books.push(this)
        
    }
    this.removeLibrary = function(someLibrary){
        let removeLibrary = this.libraries.filter(library => library.name !==someLibrary.name)
        this.libraries= removeLibrary
        let removeBook = someLibrary.books.filter(book=>book!== this)
        someLibrary.books = removeBook
    }
}
let library1 = new Library("1",[])
let library2 = new Library("2",[])
let book1 = new Book("1", "drama",[], [])
let book2 = new Book("2", "drama",[], [])
console.log("====adding libraries====")
book1.addLibrary(library1)
book1.addLibrary(library2)
book2.addLibrary(library1)
book2.addLibrary(library2)
library1.printBooks()
library2.printBooks()
console.log("====deleting libraries & books====")
book1.removeLibrary(library1)
book2.removeLibrary(library2)
library1.printBooks()
library2.printBooks()
 

// Author
// FirstName - string
// LastName - string
// YearOfBirth - number
// Books - emptyArray as default, not settable
// CurrentBook - null as default, not settable
// StartBook - accepts Book object and adds it to the CurrentBook property

function Author (firstName, lastName, yearOfBirth, books){
    this.firstName = !firstName ? "unnamed author" : firstName;
    this.lastName = !lastName ? "unnamed author" : lastName;
    this.yearOfBirth = yearOfBirth;
    this.books = !books ? [] : books;
    this.currentBook = null;
    this.startBook = function (someBook){
        if(this.currentBook){
            this.books.push(this.currentBook)    
            this.currentBook = someBook        
        }else if(!this.currentBook){
            this.currentBook = someBook
        }
    }
}

console.log("====author methods====")
let author = new Author("name", "lastname",1996)
author.startBook(book1)
console.log(author)
author.startBook(book2)
console.log(author)

console.log("====adding books====")
library1.addBook(book1)
library2.addBook(book2)
library1.printBooks()
library2.printBooks()
console.log("====print number of members====")
console.log(library1.numberOfMembers)
console.log(library2.numberOfMembers) 
// Make the functions AddLibrary, RemoveLibrary and StartBook dynamic.

// AddLibrary - When the book calls AddLibrary, the book should be added to the Books property of the library
// RemoveLibrary - When the book calls RemoveLibrary, the book should be removed from the Books property of the library
// StartBook - When the author calls StartBook the book should also be added to the Author property Books ( The book that he is starting ). If there was another book in the CurrentBook property, that book should be transferred to Books and then add the new Book as CurrentBook
