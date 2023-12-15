// prompt for client vo eneter money
let client = parseInt(prompt("enter how much money do you need"))
//account money
let money = 5000


function atm(cash, account){
    if(cash <= account){
        account = account-cash
        console.log(`Take your money ${cash}. On your account you have left ${account}`)
    }else{
        console.log("Not enough money")
    }
    return account;
}

atm(client,money);