import AdminModel from "../model/auth.admin.js";

class AdminController{
    constructor(){
        this.admin = new AdminModel()
    }

    async editBook(req,res){

        try {
            const id = req.params.id
            const reqBody = req.body
            if(!reqBody){
                return res.send({message: "You didn't enter any changes."})
            }
            const book = await this.admin.updateBook(id, reqBody)
            res.send({message: `The book with id ${id} is updated`, updatedBook: book})
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }

    async readBooks(req, res){
        try {
            const books = await this.admin.getDeletedBooks()
            res.send({allDeletedBooks: books})
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }
}

export default AdminController