import express from "express"
import publicRouter from "./routes/publicRoutes.js"
import authRouter from "./routes/authRoutes.js"
import userBooksRouter from "./routes/usersBooksRoutes.js"
import adminBooksRouter from "./routes/adminRouter.js"

const app = express()

app.use(express.json())
app.use(publicRouter)
app.use(authRouter)
app.use(adminBooksRouter)
app.use(userBooksRouter)
const port = 3000
const host = "localhost"

app.listen(port, host,()=>{
    console.log(`Server is up and running on host ${host} and port ${port}`)
})