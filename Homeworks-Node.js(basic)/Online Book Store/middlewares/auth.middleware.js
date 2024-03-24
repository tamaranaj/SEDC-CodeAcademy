import jwt from "jsonwebtoken"
import { ENV } from "../services/env.config.js"
export const authenticate = (req, res, next) =>{
    const token = req.headers.authorization
    if(!token){
        return res.status(401).send({message:"Token does not exist"})
    }
    try {
        const userPayload = jwt.verify(token,ENV.JWT_SECRET)
        req.user = userPayload
    } catch (error) {
        return res.status(401).send({message:"Invalid token"})
    }

    next()
}

export const authorize = (req,res,next) =>{

    if(req.user.permission !== "ADMIN"){
        return res.status(403).send({message: "Forbidden"});
    }

    next()
}

export const authorizeUsers = (req, res, next)=>{
    if(req.user.permission !== "ADMIN" || req.user.permission !== "USER"){
        return res.status(403).send({message: "Forbidden"});
    }

    next()
}