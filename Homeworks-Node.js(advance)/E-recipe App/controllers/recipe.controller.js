import RecipeModel from "../models/recipe.model.js";
import { Recipe } from "../entities/recipe.js";
class RecipeController{
    constructor(){
        this.recipeModel = new RecipeModel()
    }

    async createRecipe(req, res){
        const {recipeName, description, cookingDuration, ingredients, servings, difficulty, cuisine } = req.body

        try {
            const newRecipe = new Recipe(recipeName, description, cookingDuration, ingredients, servings, difficulty, cuisine)
            const response = await this.recipeModel.addRecipe(newRecipe)
            res.status(201).send({message: `New recipe, ${response.recipeName} is successful added with id ${response._id} `})
        } catch (error) {
            res.send({message: error.message})
        }
    }

    async readRecipes(req, res){
        try {
            const recipes = await this.recipeModel.getAllRecipes()
            res.send(recipes)
        } catch (error) {
            res.send({message: error.message})
        }
    }

    async findById(req, res){
        const id = req.params.id
        try {
            const recipe = await this.recipeModel.findRecipe(id)
            if(!recipe){
                return res.status(404).send({message: `Recipe with id: ${id}, does not exist.`})
            }
            res.send(recipe)
        } catch (error) {
            res.send({message: error.message})
        }
    }

    async deleteById(req, res){
        const id = req.params.id
        try {
            const recipe = await this.recipeModel.deleteRecipe(id)
            console.log(recipe)
            if(!recipe){
                return res.status(404).send({message: `Recipe with id: ${id} not found.`})
            }
            res.send({message: `${recipe.recipeName} is deleted.`, deletedRecipe: recipe})
        } catch (error) {
            res.send({message: error.message})
        }
    }
    
    async updateRecipe(req, res){
        const id = req.params.id
        const {recipeName, description, cookingDuration, ingredients, servings, difficulty, cuisine } = req.body

        const newRecipe = new Recipe(recipeName, description, cookingDuration, ingredients, servings, difficulty, cuisine)

        try {
            const updatedRecipe = await this.recipeModel.findAndUpdate(id, newRecipe)
            if(!updatedRecipe){
                return res.status(404).send({message: `Recipe with id: ${id} not found.`})
            }
            res.send({message: `Recipe with id ${id} is updated.`})
        } catch (error) {
            res.send({message: error.message})
        }
    }
}

export default RecipeController