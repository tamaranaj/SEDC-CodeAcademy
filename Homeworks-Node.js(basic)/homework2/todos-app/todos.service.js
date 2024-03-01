import fsPromises from "fs/promises";

// NAMED EXPORT
export const getTodos = async () => {
    // When we read JSON, it is strigified =)
    const todos = await fsPromises.readFile("./db/todos.json", {encoding: 'utf-8'});
    const parsedTodos = JSON.parse(todos);

    return parsedTodos;
};

// NAMED EXPORT
export const createTodo = async (description) => {
    // PARSED TODOS FROM todos.json
    const todos = await getTodos();
    
    const todo = {
        id: Date.now(), // miliseconds of current time =)
        name: description,
        isDone: false
    }

   
    todos.push(todo);

    const strigifiedTodos = JSON.stringify(todos)
    
    await fsPromises.writeFile("./db/todos.json", strigifiedTodos)

};

export const checkId = async(id)=>{
    const todos = await getTodos();
    //find the todo with the given id
    let result = todos.find(item=> item.id ==id)
    
    if(result){
        result.isDone = true
        let todosJson = JSON.stringify(todos);
        //to update todos back to the json file
        await fsPromises.writeFile("./db/todos.json", todosJson);
    } else {
        throw new Error("Todo not found");
    }
}

export const deleteToDo = async(id)=> {
    const todos = await getTodos()
    let result = todos.find(item=>item.id ==id)

    if(result){
        //get the index and delete it
        let index = todos.indexOf(result)
        let deleted = todos.toSpliced(index,1)
        
        const deletedStr= JSON.stringify(deleted)
        await fsPromises.writeFile("./db/todos.json", deletedStr);
    } else {
        console.log("To do not found")
    }
}

