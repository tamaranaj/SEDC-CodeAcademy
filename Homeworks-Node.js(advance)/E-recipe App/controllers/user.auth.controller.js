import UserModel from "../models/user.auth.model.js"
 
class UserController{
    constructor(){
        this.userModel = new UserModel()
    }

    async register(req,res){
        const {email, password, permission} = req.body
        try {
            const id = await this.userModel.registerUser(email, password, permission)
            res.status(201).send({message: `Account is created with ID: ${id}.`})
        } catch (error) {
            res.send({message: error.message})
        }
    }

    async login(req, res){
        const {email, password} = req.body
        try {
            if(!email || !password){
                throw new Error("Email or password is missing")
            }
            const token = await this.userModel.loginUser(email, password)
            res.send({message: "Login successful", accessToken: token})
        } catch (error) {
            res.send({message: error.message})
        }       
    }
}

export default UserController