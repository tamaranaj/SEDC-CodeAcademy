import jwt from "jsonwebtoken";
import { ENV } from "./env.config.js"

export const generateToken = (user) =>{
    const tokenPayload = {
        email: user.email,
        permission : user.permission
    }

    const token = jwt.sign(tokenPayload, ENV.JWT_SECRET, {expiresIn: "2h"})

    return token
}