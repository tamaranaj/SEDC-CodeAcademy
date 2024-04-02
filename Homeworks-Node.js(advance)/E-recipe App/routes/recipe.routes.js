import { Router } from "express";
import RecipeController from "../controllers/recipe.controller.js";
import { authenticate } from "../middlewares/auth.middlewares.js";
const recipeRouter = Router()
const recipeController = new RecipeController()

//CREATE RECIPE
recipeRouter.post("", async(req, res)=>{
    await recipeController.createRecipe(req, res)
})

//READ ALL RECIPES
recipeRouter.get("", async(req, res)=>{
    await recipeController.readRecipes(req, res)
})

//FIND RECIPE BY ID
recipeRouter.get("/:id", async(req, res)=>{
    await recipeController.findById(req, res)
})

//DELETE BY ID
recipeRouter.delete("/:id", authenticate ,async(req, res)=>{
    await recipeController.deleteById(req, res)
})

//UPDATE RECIPE
recipeRouter.put("/:id", authenticate ,async(req, res)=>{
    await recipeController.updateRecipe(req, res)
})

export default recipeRouter