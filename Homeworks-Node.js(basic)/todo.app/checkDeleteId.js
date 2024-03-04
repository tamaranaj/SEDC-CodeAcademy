import {isDone, deleteTodo, getTodos} from "./toDo.service.js"

await isDone(1709556512056) //id
await deleteTodo(1709556512053) //id
console.log(await getTodos())