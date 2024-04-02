import { User } from "../entities/user.js";
import { findUser, addUser } from "../services/register.user.service.js";
import bcrypt from "bcryptjs"
import { createToken } from "../services/jwt.service.js";

class UserModel{
    async registerUser(email, password, permission){
        try {
            const result = await findUser(email)
            if(result){
                throw new Error (`User with ${email} already exist.`)
            }
            const hashedPass = await bcrypt.hash(password,10)
            const user = new User(email, hashedPass, permission)
            const newUser = await addUser(user)
            return newUser
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async loginUser(email, password){
        try {
            const user = await findUser(email)
            if(!user){
                throw new Error("Create account first.")
            }
            const isPassValid = await bcrypt.compare(password, user.password)
            if(!isPassValid){
                throw new Error("Invalid password")
            }
            const accessToken = createToken(user)
            return accessToken
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default UserModel