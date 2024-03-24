import {addUser, USERS_DB} from "../services/users.books.services.js"
import { readFile } from "../services/fs.services.js";
import { v4 as uuid} from "uuid"
import { User } from "../entities/user.entity.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../services/jwt.service.js";

class AuthUsersModel{
    async register(email, password, permission){
        try{
           
            const users = await readFile(USERS_DB)
            const user = users.find(u=> u.email === email)
            if(user){
                throw new Error(`User with email ${email} already exists.`)
            }

            const idOfUser = uuid()
            const hashedPass = await bcrypt.hash(password, 10)  
            const newUser = new User(
                idOfUser, email,hashedPass, permission
            )   
        
            await addUser(newUser) 
        }catch (error) {
            throw new Error(error.message)
        }
    }

    async login(email,password){
        const users = await readFile(USERS_DB)
        const user = users.find(u=> u.email === email)
        if(!user){
            throw new Error(`User with email ${email} does not exists.`)
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid){
            throw new Error("Invalid password")
        }

        const accessToken = generateToken(user)

        return accessToken
    }

    async logout(email, password){
        const users = await readFile(USERS_DB)
        const user = users.find(u=> u.email === email)
        if(!user){
            throw new Error(`User with email ${email} does not exists.`)
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid){
            throw new Error("Invalid password")
        }
        return "Logout Successfully"
    };
}
export default AuthUsersModel
