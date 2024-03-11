
// #### Route Specifications:

// 1. **GET** `/books`: Returns all books available in the `books_store.db.json`.

// 2. **GET** `/books/:id`: Returns the details of a specific book by its ID.

// 3. **POST** `/books`: Adds a newly created book into the `books_store.db.json`.

import express from 'express';
import { result } from './books.js';
import fs from "fs"
const server = express()
server.use(express.json())

server.get("/books",(request, response)=>{
    response.send(result)
})

server.get("/books/:id", (request, response)=>{
    const params = request.params
    const book = result.find(item=> item.id==params.id)
    if(!book){
        return response.status(404).send("<h1>Book not found!</h1>")
    }
    response.send(book)
})


server.post("/books", (request, response)=>{
    const newBook = request.body
    newBook.id = result.length+1
    result.push(newBook)
    console.log(result)
    fs.writeFileSync("books_store.db.json", JSON.stringify(result))
    response.status(201).send({message:"New book is created", book: newBook , allBooks: result})
})

server.listen("3000", "localhost", ()=>{
    console.log("Server is up and running")
})