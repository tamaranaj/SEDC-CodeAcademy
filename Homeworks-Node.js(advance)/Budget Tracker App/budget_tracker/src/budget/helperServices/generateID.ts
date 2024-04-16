import {v4 as uuid} from "uuid"

export const generateID = (): string=>{
    const id =  uuid()
    return id
}