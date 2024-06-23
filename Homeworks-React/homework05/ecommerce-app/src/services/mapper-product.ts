import { Product, ProductCreationProps } from "../interfaces/product";

export const mapperProduct = (newProduct: ProductCreationProps, array :Product[])=>{

    const product : Product={
        id: array.length +1,
        title: newProduct.title,
        description: newProduct.description,
        category: newProduct.category,
        price: Number(newProduct.price),
        image: newProduct.image,
        rating:{
            rate: 0,
            count: 0
        }
    }

    return product
}
