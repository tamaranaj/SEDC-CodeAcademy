import {checkId, deleteToDo, getTodos} from "./todos.service.js"

await checkId(1709317020517) //id
await deleteToDo(1709317020517) //id
console.log(await getTodos())