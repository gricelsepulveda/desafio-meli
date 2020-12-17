//IMPORTS
import React, { useContext, useEffect } from "react"
import Context from "../Context"

//Components
import Button from "../../components/Button/Button"

//Aux
import { getPrice } from "../../aux/price"

//Styles
import '../../styles/views/product-view.scss'
import { ProductType } from "../../components/ProductList/List"

export interface ProductDetail extends ProductType {
    sold_quantity: number,
    description: string
}

const ProductView:React.FunctionComponent = () => {
    const context = useContext(Context)

    const fetchProduct = async () => {
        let id = window.location.href.split('/')[4]
        const data = await fetch(`http://localhost:3000/api/items/${id}`)
        .then((response:any) => {
            return response.json()
        })
        context.setProductData(data.data.item)
    }

    useEffect(() => {
        fetchProduct()
    }, [context.selectedProduct])


    return (
        <section className="ml-section-product-view">
            <div className="ml-product-view-image-wrapper">
                <figure
                    className="ml-product-view-image"
                    style={{backgroundImage: `URL("${context.productData.picture}")`}}
                    tabIndex={0}
                />
            </div>
            <div className="ml-product-view-details-wrapper">
                <article className="ml-product-view-details">
                    <p className="ml-product-view-details-intro" tabIndex={0}>
                        {`${context.productData.condition} `} 
                        <span>
                        {`${context.productData.sold_quantity} `}
                        vendidos
                        </span>
                    </p>
                    <h1 className="ml-product-view-details-title" tabIndex={0}>
                        { context.productData.title }
                    </h1>
                    <span className="ml-product-view-price" tabIndex={0}>
                        { getPrice(context.productData.price.amount, 'es-AR', context.productData.price.currency) }
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
                    { context.productData.description }
                </p>
            </div>
        </section>
    )
}

export default ProductView