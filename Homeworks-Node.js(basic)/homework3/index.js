import {EventEmitter} from "events"
import colors from "colors";
import { EVENTS } from "./events.js";
export const event= new EventEmitter()
const timeOut = (item)=>{
    setTimeout(()=>{event.emit(item)},3000)
}
event.on(EVENTS.RED,()=>{
    console.log(`${EVENTS.RED}`.bgRed)
    timeOut(EVENTS.YELLOW)
     
})
event.on(EVENTS.YELLOW, ()=>{
    console.log(`${EVENTS.YELLOW}`.bgYellow)
    timeOut(EVENTS.GREEN)
})
event.on(EVENTS.GREEN,()=>{
    console.log(`${EVENTS.GREEN}`.bgGreen)
    timeOut(EVENTS.RED)
})


event.emit(EVENTS.RED)

