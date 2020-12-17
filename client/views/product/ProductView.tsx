//IMPORTS
import React from "react"

//Components
import Button from "../../components/Button/Button"

//Aux
import { getPrice } from "../../aux/price"

//Styles
import '../../styles/views/product-view.scss'

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
                    tabIndex={0}
                />
            </div>
            <div className="ml-product-view-details-wrapper">
                <article className="ml-product-view-details">
                    <p className="ml-product-view-details-intro" tabIndex={0}>
                        {`${props.productData.condition} `} 
                        <span>
                        {`${props.productData.sold} `}
                        vendidos
                        </span>
                    </p>
                    <h1 className="ml-product-view-details-title" tabIndex={0}>
                        { props.productData.name }
                    </h1>
                    <span className="ml-product-view-price" tabIndex={0}>
                        { getPrice(props.productData.price, 'es-CL', 'clp') }
                    </span>
                    <Button 
                        value="comprar"
                        color="color-2"
                        size="full"
                        disabled={false}
                        onClick={() => alert('flujo de compra')}
                        tabIndex={0}
                    />
                </article>
            </div>
            <div className="ml-product-view-description">
                <h2 className="ml-product-view-description-title" tabIndex={0}>
                    Descripción del producto
                </h2>
                <p className="ml-product-view-description-text" tabIndex={0}>
                    { props.productData.description }
                </p>
            </div>
        </section>
    )
}

export default ProductView