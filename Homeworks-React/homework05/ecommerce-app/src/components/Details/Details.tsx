import { useContext } from "react"
import { ProductContext } from "../../context/product.context"
import { useParams } from "react-router-dom"
import './Details.css'

export const Details = () => {
    const { allProducts } = useContext(ProductContext)
    const params = useParams()
    const details = allProducts.find((product) => product.id === Number(params.id))
    console.log(details)
    return (
        <div className="details-wrapper">
            {details ? <div className="container">
                <div className="details-info">
                    <img src={details?.image} alt="product" className="product" />
                    <div>
                        <h3>{details?.title}</h3>
                        <p><strong>Description: </strong>{details?.description}</p>
                        <p><strong>Price: </strong>{details?.price}$</p>
                    </div>

                </div>


            </div> : <h1>Product with id: {params.id} does not exist</h1>}



        </div>
    )
}
