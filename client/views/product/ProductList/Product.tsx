//IMPORTS
import React from "react"
import { Link } from "react-router-dom"
import { ProductType } from "../../../types/types"
import { getPrice } from "../../../aux/price"

const Product:React.FunctionComponent<ProductType> = (props) => {
    return (
        <li className="ml-product-list-element" tabIndex={0}>
            <Link to={`/product/${props.id}`} aria-label={props.title}>
                <article className="ml-product-list-article">
                    <div className="ml-product-list-element-wrapper">
                        <figure
                            className="ml-product-list-element-figure"
                        >
                            <img 
                                className="ml-product-list-element-image"
                                src={props.picture}
                                alt={props.title}
                                tabIndex={0}
                            />
                        </figure>
                        <div className="ml-product-list-description">
                            <h2 className="ml-product-list-description-title" tabIndex={0}>
                                {props.title}
                            </h2>
                            <p className="ml-product-list-description-price" tabIndex={0}>
                                {getPrice(props.price.amount, 'es-AR', props.price.currency)}
                            </p>
                        </div>
                    </div>
                    <span className="ml-product-list-description-condition" tabIndex={0}>
                        {props.condition}
                    </span>
                </article>
            </Link>
        </li>
    )
}

export default Product
