export class User {
    constructor(email, password, permission){
        this.email = email
        this.password = password
        

        if(!email || !password){
            throw new Error("Email or password is missing")
        }
        if(permission === "ADMIN" || permission === "admin"){
            this.permission = "ADMIN"
        }else{
            this.permission = "USER"
        }

    }
    


}