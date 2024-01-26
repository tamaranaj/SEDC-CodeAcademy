// Create a Constructor function for product. Each product has property: name, category (string), hasDiscount (bool) and price. Create an array of 15 products. 
function Product (name, category, hasDiscount, price){
    this.name = name,
    this.category = category,
    this.hasDiscount = hasDiscount,
    this.price = price
}

let arrayOfProducts = [new Product("Bread", "food", true, 25), 
new Product("Cola", "drinks", false, 80), 
new Product("Sugar", "food", true, 40), 
new Product("Soap", "chemical", false, 500), 
new Product("Cheese", "food", false, 400), 
new Product("Juice", "drinks", false, 190), 
new Product("Butter", "food", true, 120), 
new Product("Shampoo", "chemical", true, 200),
new Product("Sparkling water", "drinks", true, 30),
new Product("Apple", "fruit", true, 70),
new Product("Banana", "fruit", true, 90),
new Product("Avocado", "fruit", false, 150),
new Product("Potato", "vegetable", true, 50),
new Product("Carrot", "vegetable", false, 100),
new Product("Broccoli", "vegetable", true, 120)]


console.log(`===Find all products with price greater than 20.===`)
arrayOfProducts.filter(p=>p.price>100).forEach(p=>console.log(`${p.name} ${p.price}`))



console.log(`===Get the names of all products of Category Food, that are on discount.===`)
let foodOnDiscount = arrayOfProducts.filter(p=> p.category === "food" && p.hasDiscount === true).forEach(f=>console.log(f.name))
console.log('==second way==')
let foodOnDiscount2 = arrayOfProducts.filter(p=> p.category === "food" && p.hasDiscount == true).map(p=>p.name).forEach(p=> console.log(p))



console.log(`===Get the price of all products that are on discount.===`)
let discount = arrayOfProducts.filter(d=>d.hasDiscount == true).forEach(p=>console.log(`${p.name} ${p.price}`))



console.log(`===Find the name and price of all products with name starting with a vowel, that are not on discount..===`)

let noDiscountVowelProduct = arrayOfProducts.filter(product=> product.hasDiscount == false).filter(p=>p.name && p.price).map(mapVowels)

function mapVowels(p){
    if(p.name.charAt(0).toLowerCase()=="a"||
    p.name.charAt(0).toLowerCase()=="e"||
    p.name.charAt(0).toLowerCase()=="i"||
    p.name.charAt(0).toLowerCase()=="o"||
    p.name.charAt(0).toLowerCase()=="u")
    {console.log(`${p.name} ${p.price}`)}
    
}
//let noDiscountVowelProduct2 = arrayOfProducts.filter(d=>d.hasDiscount==false).filter(p=>p.name && p.price).forEach(mapVowels)

