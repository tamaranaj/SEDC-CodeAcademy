import { getTodos, createTodo} from "./toDo.service.js" // NAMED IMPORT


await createTodo("Exercise")
await createTodo("Study Node.js")
await createTodo("Write homework")
console.log(await getTodos())

