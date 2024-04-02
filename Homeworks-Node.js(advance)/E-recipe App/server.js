import express from "express"
import { mongoConnection } from "./db/mongo-connection.js"
import recipeRouter from "./routes/recipe.routes.js"
import userRouter from "./routes/user.auth.router.js"
import adminRouter from "./routes/admin.router.js"

const app = express()
const port = 3000
const host = "localhost"

app.use(express.json())

app.use("/recipes",recipeRouter)
app.use(userRouter)
app.use(adminRouter)

app.listen(port, host, async()=>{
    console.log(`Server is up and running on port ${port} and host ${host}.`)
    await mongoConnection()
})