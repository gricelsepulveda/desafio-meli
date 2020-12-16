//IMPORTS
import React from "react"

//Components
import Button from "../components/Button/Button"

//Aux
import { getPrice } from "../aux/price"

//Styles
import '../styles/common/product-view.scss'

export type ProductDetailType = {
    name: string,
    condition: string,
    sold: number,
    price: number,
    description: string,
    image: string
}

type ProductViewProps = {
    productData: ProductDetailType
}

const ProductView:React.FunctionComponent<ProductViewProps> = (props) => {
    return (
        <section className="ml-section-product-view">
            <div className="ml-product-view-image-wrapper">
                <figure
                    className="ml-product-view-image"
                    style={{backgroundImage: `URL("${props.productData.image}")`}}
                />
            </div>
            <div className="ml-product-view-details-wrapper">
                <article className="ml-product-view-details">
                    <p className="ml-product-view-details-intro">
                        {`${props.productData.condition} `} 
                        <span>
                        {`${props.productData.sold} `}
                        vendidos
                        </span>
                    </p>
                    <h1 className="ml-product-view-details-title">
                        { props.productData.name }
                    </h1>
                    <span className="ml-product-view-price">
                        { getPrice(props.productData.price, 'es-CL', 'clp') }
                    </span>
                    <Button 
                        value="comprar"
                        color="color-2"
                        size="full"
                        disabled={false}
                        onClick={() => alert('flujo de compra')}
                    />
                </article>
            </div>
            <div className="ml-product-view-description">
                <h2 className="ml-product-view-description-title">
                    Descripción del producto
                </h2>
                <p className="ml-product-view-description-text">
                    { props.productData.description }
                </p>
            </div>
        </section>
    )
}

export default ProductView