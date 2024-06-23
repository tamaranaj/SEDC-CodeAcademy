import "./ProductCard.css"
import {  useNavigate } from "react-router-dom"
interface ProductCardProps{
    id:number,
    title: string,
    price: number,
    image: string,
    rate: number
}


export const ProductCard = (props: ProductCardProps)=>{
    const navigate = useNavigate()
    const handleDetails=(id:number )=> {
        navigate(`/product/${id}`)
    }
    const{id, title, price, image, rate} = props
    return(
        <div className="card">
            
            <h3>{title}</h3>
            <div className="cardInfo">
            <img src={image} alt={title} className="cardImg" />
            <div className="wrap-paragraphs">
                <p>Price: {price}$</p>
                <p>Rate: {rate}</p>
                <button onClick={()=>handleDetails(id)}>Details</button>
            </div>
            </div>
            
        </div>
    )
}
