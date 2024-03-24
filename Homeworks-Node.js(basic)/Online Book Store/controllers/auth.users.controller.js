import  AuthUsersModel from "../model/auth.users.js";

export class AuthUsersController{
    constructor(){
        this.authUser = new AuthUsersModel()
    }
    async registerUser(req,res){
        try {
            const{email, password, permission} = req.body
            if(!email || !password || !permission){
                return res.status(401).send({message: "Email, password or permission is missing"})
            }
            
            await this.authUser.register(email,password, permission)
            res.send({message: "Account is created"})
        } catch (error) {
            res.send({error: error.message})
        }
    }

    async loginUser(req,res){
        try{
            const{email,password} = req.body
            if(!email || !password){
                return res.status(401).send({message: "Email or password is missing"})
            }
            const accessToken = await this.authUser.login(email, password)
            res.send({message: "Login successfully", token: accessToken})
        }catch(error){
            res.send({error: error.message})
        }
    }


    async logoutUser(req,res){
        try {
            const {email,password} = req.body
            const message = await this.authUser.logout(email, password)
            res.send({message: message})
        } catch (error) {
            res.send({error: error.message})
        }
        
    }
}