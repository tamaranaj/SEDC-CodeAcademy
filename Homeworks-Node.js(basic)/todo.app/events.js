import { EventEmitter } from "events"
import fs from 'fs'

 const event = new EventEmitter()

event.on("finished", (object)=>{
    const finish = `The task ${object.name} with id${object.id} is done at ${new Date()}. \n`
    fs.appendFileSync("finishedTasks.txt", finish)
    
})


event.on("removed", (object)=>{
    const remove = `The task ${object.name} with id${object.id} is removed from list at ${new Date()}. \n`
    fs.appendFileSync("removedTasks.txt", remove)
    
})

export default event
