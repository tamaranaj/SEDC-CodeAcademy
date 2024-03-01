import { getTodos, createTodo} from "./todos.service.js" // NAMED IMPORT



await createTodo("Wash the Dishes")
await createTodo("Study Nodejs")
await createTodo("write homework")

console.log(await getTodos())
