import AccommodationsModel from "../models/acc.model.js";

class AccommodationsController{
    constructor(){
        this.accModel = new AccommodationsModel()
    }

    async addAccommodation(req, res){
        const{ name, address, bookingPricePerDay, type, hasAC, hasPrivateParking, hasWifi, isAvailable } = req.body
        const newAcc = {
            name, address, bookingPricePerDay, type, hasAC, hasPrivateParking, hasWifi, isAvailable
        }
        try {
            const acc = await this.accModel.addAccommodation(newAcc)
            console.log(acc)
            res.status(201).send({message: `Accommodation ${acc.name} is added with id: ${acc._id}`})
        } catch (error) {
            return res.send({message: error.message})
        }

    }

    async readAccommodations(req, res){
        try{
            const acc = await this.accModel.readAccommodations()
            res.send(acc)
        }
        catch(error){
            return res.status(404).send({message: error.message})
        }
    }

    async findById(req,res){
        const id = req.params.id
        try {
            const acc = await this.accModel.findAcc(id)
            if(!acc){
                return res.status(404).send({message: `Accommdodation with id ${id} does not exist.`})
            }
            res.send(acc)
        } catch (error) {
            res.send({message: error.message})
        }
    }

    async deleteById(req, res){
        const id = req.params.id
        try {
            const acc = await this.accModel.deleteAcc(id)
            if(!acc){
                return res.status(404).send({message: "Accommodation not found"})
            }
            res.send({message: `Accommodation ${acc.name} is deleted`})
        } catch (error) {
            res.send({message: error.message})
        }
    }

    async updateAcc(req, res){
        const id = req.params.id
        const{ name, address, bookingPricePerDay, type, hasAC, hasPrivateParking, hasWifi, isAvailable } = req.body
        const newAcc = {
            name, address, bookingPricePerDay, type, hasAC, hasPrivateParking, hasWifi, isAvailable
        }
        try {
            const update = await this.accModel.updateAcc(id, newAcc)
            if(!update){
                return res.status(404).send({message: `Accommodation with id ${id} not found`})
            }

            res.send({message: `Accommodation with id ${id} is updated`})
        } catch (error) {
            res.send({message: error.message})
        }
    }
}

export default AccommodationsController