function applyDiscounts(productArray,discountPercentage,productId){
    if(!productArray.length){
        return console.log([])
    }
    const itemWithId = productWithId(productArray,productId)
    if(itemWithId){
        itemWithId.price = itemWithId.price-((discountPercentage * itemWithId.price)/100)
        console.log(itemWithId)
        return
    }

    if(!productId || productId<1){
        let result = productArray.filter(item=> item.price >100).filter(item=> item.price= item.price-((discountPercentage*item.price)/100))
        console.log(result)
    }

}

const products = [
    {name: "product1", price: 500, id: 1},
    {name: "product2", price: 100, id:2},
    {name: "product3", price: 250, id:3},
    {name: "product4", price: 70, id:4},
    {name: "product5", price: 999, id:5}
]


function productWithId(array,id){
    if(id){
        const item = array.find(item=> item.id ==id)
        if(item == undefined){
            return console.log("item not found")
        }
        return item
    }
}

applyDiscounts(products,50,5)