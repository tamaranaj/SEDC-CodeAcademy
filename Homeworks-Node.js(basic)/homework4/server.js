import express from 'express';
import booksRouter from './routes/books.routes.js';

const server = express()
server.use(express.json())
server.use(booksRouter)
const port = "3000"
const host = "localhost"
server.listen(port, host, ()=>{
    console.log("Server is up!")
})