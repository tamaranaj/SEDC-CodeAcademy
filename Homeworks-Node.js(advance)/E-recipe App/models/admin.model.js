import { deletedRecipeMongoModel, beforeUpdateRecipeMongoModel } from "../db/schemas/recipes.schema.js"
class AdminModel{
    async readDeleted(){
        const recipes = await deletedRecipeMongoModel.find()
        return recipes
    }

    async readOriginalRecipes(){
        const recipes = await beforeUpdateRecipeMongoModel.find()
        return recipes
    }


}

export default AdminModel