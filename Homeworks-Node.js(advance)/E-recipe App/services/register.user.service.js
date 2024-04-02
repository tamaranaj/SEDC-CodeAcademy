import { userMongoModel } from "../db/schemas/user.schema.js";

export const findUser = async(email)=>{
    const result = await userMongoModel.findOne({email: email})
    return result
}

export const addUser = async(user)=>{
    const newUser = new userMongoModel(user)
    const response = await newUser.save()
    return response._id
}