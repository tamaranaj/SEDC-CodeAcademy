import fsPromises from "fs/promises";
import event from "./events.js";


export const getTodos = async()=>{
    const todos = await fsPromises.readFile("./db/toDos.json", {encoding: "utf-8"})
    const parsedTodos = JSON.parse(todos)

    return parsedTodos
}

export const createTodo = async (description)=>{
    const todos = await getTodos()

    const todo ={
        id: Date.now(),
        name: description,
        isDone: false
    }

    todos.push(todo)

    const stringifiedTodos = JSON.stringify(todos)

    await fsPromises.writeFile("./db/toDos.json", stringifiedTodos)
}

// isDone: true
export const isDone = async(id)=>{
    const todos = await getTodos()
    let result = todos.find(item => item.id == id)
    if(result){
        result.isDone = true
        const stringifiedTodos = JSON.stringify(todos)
        event.emit("finished", result)
        await fsPromises.writeFile("./db/toDos.json", stringifiedTodos)
    }else{
        throw new Error("To do not found")
    }
}

//delete to do

export const deleteTodo = async(id)=>{
    const todos = await getTodos()
    let result = todos.find(item => item.id == id)
    if(result){
        let index = todos.indexOf(result)
        let deleted = todos.toSpliced(index,1)
        const deletedStr = JSON.stringify(deleted)
        event.emit("removed", result)
        await fsPromises.writeFile("./db/toDos.json", deletedStr)
    }else{
        throw new Error("To do not found")
    }
}