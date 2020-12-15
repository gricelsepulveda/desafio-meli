//IMPORTS
import React from "react"
import { ProductType } from "./List"
import { getPrice } from "../../aux/price"

const Product:React.FunctionComponent<ProductType> = (props) => {
    return (
        <li className="ml-product-list-element">
            <article className="ml-product-list-article">
                <div className="ml-product-list-element-wrapper">
                    <img 
                        className="ml-product-list-element-image"
                        src={props.image}
                        alt={props.name}
                    />
                    <div className="ml-product-list-description">
                        <h2 className="ml-product-list-description-title">
                            {props.name}
                        </h2>
                        <p className="ml-product-list-description-price">
                            {getPrice(props.price, 'es-CL', 'CLP')}
                        </p>
                    </div>
                </div>
                <span className="ml-product-list-description-other">
                    {props.other}
                </span>
            </article>
        </li>
    )
}

export default Product
