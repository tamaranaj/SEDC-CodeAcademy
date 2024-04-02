import { recipeMongoModel } from "../db/schemas/recipes.schema.js";
import { addDeleted, addRecipeBeforeUpdate } from "../services/admin.services.js"

class RecipeModel{
    
    async addRecipe(newRecipe){
        const recipe = new recipeMongoModel(newRecipe)
        const response = await recipe.save()
        return response
    }

    async getAllRecipes(){
        const recipes = await recipeMongoModel.find()
        return recipes
    }

    async findRecipe(id){
        const recipe = await recipeMongoModel.findById(id)
        return recipe
    }

    async deleteRecipe(id){
        const recipe = await recipeMongoModel.findByIdAndDelete(id)
        const result = await addDeleted(recipe)
        console.log(result)
        return recipe
    }

    async findAndUpdate(id, newRecipe){
        const updated = await recipeMongoModel.findByIdAndUpdate(id, newRecipe)
        const result = await addRecipeBeforeUpdate(updated)
        console.log(result)
        return updated
    }
}

export default RecipeModel

