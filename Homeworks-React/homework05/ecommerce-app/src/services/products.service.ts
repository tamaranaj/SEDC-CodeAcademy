import { Product } from "../interfaces/product.ts"
export const getProducts =async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data: Product[] = await response.json()
    return data
}


export const addNewProduct = async(newProduct: Product)=>{
    const response = await fetch('https://fakestoreapi.com/products',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct)})
          console.log(response, "from fetch")
    return response
}
