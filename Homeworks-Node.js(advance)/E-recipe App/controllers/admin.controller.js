import AdminModel from "../models/admin.model.js";

class AdminController{
    constructor(){
        this.adminModel = new AdminModel()
    }

    async getDeleted(req, res){
        try {
            const recipes = await this.adminModel.readDeleted()
            res.send(recipes)
        } catch (error) {
            res.send({message: error.message})
        }
    }

    async getOriginal(req, res){
        try {
            const recipes = await this.adminModel.readOriginalRecipes()
            res.send(recipes)
        } catch (error) {
            res.send({message: error.message})
        }
    }

}

export default AdminController