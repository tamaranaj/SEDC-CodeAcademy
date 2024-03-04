import {isDone, deleteTodo, getTodos} from "./toDo.service.js"

await isDone(1709558988723) //id
await deleteTodo(1709558988723) //id
console.log(await getTodos())