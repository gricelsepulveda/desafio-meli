//IMPORTS
import React from "react"
import Product from "./Product"

export type Price = {
    currency: string,
    amount: number,
    decimals: number
}

export type ProductType = {
    id: string,
    title: string,
    picture: string,
    price: Price,
    condition: string,
    free_shipping: boolean
}

type ProductProps = {
    data: ProductType[]
}

const List:React.FunctionComponent<ProductProps> = (props) => {
    return (
        <ul className="ml-product-list-wrapper">
            {
                props.data != undefined ? props.data.length > 0 ?
                    props.data.map((product:ProductType, index:number) => 
                    <Product
                        id={product.id}
                        title={product.title}
                        picture={product.picture}
                        price={product.price}
                        condition={product.condition}
                        free_shipping={product.free_shipping}
                        key={`${product.title} ${index}`}
                    />) 
                    : null : null
            }
        </ul>
    )
}

export default List
