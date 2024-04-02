export class Recipe{
    constructor(recipeName, description, cookingDuration, ingredients, servings, difficulty, cuisine){
        this.recipeName = recipeName;
        this.description = !description ? "No description" : description;
        this.cookingDuration = !cookingDuration ? "2 hours" : cookingDuration;
        this.ingredients = ingredients;
        this.servings = !servings ? 4 : servings;
        this.difficulty = !difficulty ? "EASY" : difficulty
        this.cuisine = !cuisine ? "Unknown" : cuisine

        if(!recipeName || !ingredients){
            throw new Error ("Recipe Name and ingredients are required")
        }
        if(ingredients.length === 0){
            this.ingredients = ["secret  ingredients"]
        }
    }
}