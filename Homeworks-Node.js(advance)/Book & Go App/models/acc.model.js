import { accMongoModel } from "../schemas/accommodation.schema.js";

class AccommodationsModel{
    async readAccommodations(){
        const accommodations = await accMongoModel.find()
        return accommodations
    }


    async addAccommodation(acc){
        const accommodation = new accMongoModel(acc)
        const response = await accommodation.save()
        return response
    }


    async findAcc(id){
        const acc = await accMongoModel.findById(id)
        return acc
    }

    async deleteAcc(id){
        const acc = await accMongoModel.findByIdAndDelete(id)
        return acc
    }

    async updateAcc(id, updateAcc){
        const acc = await accMongoModel.findByIdAndUpdate(id, updateAcc)
        return acc
    }
}

export default AccommodationsModel