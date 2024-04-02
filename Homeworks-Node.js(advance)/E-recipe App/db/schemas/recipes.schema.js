import mongoose from "mongoose";

const { Schema } = mongoose

const recipeSchema = new Schema({
    recipeName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cookingDuration: {
        type: String,
        required: true
    },
    ingredients: {
        type: Schema.Types.Array,
        required: true
    },
    servings: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },

})

export const recipeMongoModel = mongoose.model("Recipe", recipeSchema, "recipes")
export const deletedRecipeMongoModel = mongoose.model("DeletedRecipes", recipeSchema, "deletedRecipes")
export const beforeUpdateRecipeMongoModel = mongoose.model("BeforeUpdate", recipeSchema, "recipesBeforeUpdate")