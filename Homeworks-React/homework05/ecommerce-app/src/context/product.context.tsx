import { createContext, useEffect, useState } from "react";
import { Product } from "../interfaces/product";
import { addNewProduct, getProducts } from "../services/products.service";


interface ProductContextProps {
    allProducts: Product[],
    handleSetNewProduct: (product: Product) => void
}

const ProductContextDefault : ProductContextProps={
    allProducts: [],
    handleSetNewProduct: () => { } 
}

export const ProductContext = createContext(ProductContextDefault)
interface ProductContextProviderProps {
    children: React.ReactNode; 
}

export const ProductContextProvider = ({children}: ProductContextProviderProps)=>{

    const [products, setProducts] = useState<Product[]>([])
    const [newProduct, setNewProduct] = useState<Product>()

    const createProduct = async()=>{
      if(newProduct){
        const response = await addNewProduct(newProduct)
        const data = await response.json()
        console.log(data)
        if(response.status== 200){
          setProducts([...products, newProduct])
        }
      }
    }
    const handleSetNewProduct = async (addProduct : Product)=>{
      setNewProduct(addProduct)
    }


    const handleFetch=async()=>{
        const response = await getProducts()
        setProducts(response)
    }
    useEffect(()=>{
       createProduct()
    },[newProduct])

    useEffect(() => {
        handleFetch();
    }, []);

    return (
        <ProductContext.Provider
          value={{
            allProducts: products,
            handleSetNewProduct
          }}
        >
          {children}
        </ProductContext.Provider>
      );
}
