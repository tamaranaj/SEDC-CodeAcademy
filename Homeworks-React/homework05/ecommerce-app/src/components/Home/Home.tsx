import { useContext } from "react"
import { ProductContext } from "../../context/product.context"
import { ProductCard } from "./ProductCard"
import "./Home.css"
export const Home = ()=>{
    const{allProducts} = useContext(ProductContext)
    return(
        <div>
            <h1>Our Products</h1>
            <div className="cardContainer">
                {allProducts.map(p=>(<ProductCard key={p.id} id={p.id} title={p.title} image={p.image} price={p.price} rate={p.rating.rate} />))}
            </div>
        </div>
    )
}
