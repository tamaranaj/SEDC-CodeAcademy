import { deletedRecipeMongoModel, beforeUpdateRecipeMongoModel } from "../db/schemas/recipes.schema.js";
import { Recipe } from "../entities/recipe.js";
export const addDeleted = async(deletedRecipe)=>{
    const{
        recipeName,
        description,
        cookingDuration,
        ingredients,
        servings,
        difficulty,
        cuisine
    } = deletedRecipe

    const recipe = new Recipe(recipeName, description, cookingDuration, ingredients, servings, difficulty, cuisine)
    const newDeletedRecipe = new deletedRecipeMongoModel(recipe)
    const result = await newDeletedRecipe.save()
    return result
}

export const addRecipeBeforeUpdate = async(notUpdatedRecipe)=>{
    const{
        recipeName,
        description,
        cookingDuration,
        ingredients,
        servings,
        difficulty,
        cuisine
    } = notUpdatedRecipe

    const recipe = new Recipe(recipeName, description, cookingDuration, ingredients, servings, difficulty, cuisine)

    const beforeUpdate = new beforeUpdateRecipeMongoModel(recipe)
    const result = await beforeUpdate.save()
    return result
}