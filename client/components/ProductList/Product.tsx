//IMPORTS
import React from "react"
import { ProductType } from "./List"
import { getPrice } from "../../aux/price"

const Product:React.FunctionComponent<ProductType> = (props) => {
    return (
        <li className="ml-product-list-element" tabIndex={0}>
            <article className="ml-product-list-article">
                <div className="ml-product-list-element-wrapper">
                    <img 
                        className="ml-product-list-element-image"
                        src={props.image}
                        alt={props.name}
                        tabIndex={0}
                    />
                    <div className="ml-product-list-description">
                        <h2 className="ml-product-list-description-title" tabIndex={0}>
                            {props.name}
                        </h2>
                        <p className="ml-product-list-description-price" tabIndex={0}>
                            {getPrice(props.price, 'es-CL', 'CLP')}
                        </p>
                    </div>
                </div>
                <span className="ml-product-list-description-other" tabIndex={0}>
                    {props.other}
                </span>
            </article>
        </li>
    )
}

export default Product
