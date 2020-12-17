//IMPORTS
import React, { Props } from "react"
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
    data: ProductType[],
    maxItems: number
}

const List:React.FunctionComponent<ProductProps> = (props) => {
    return (
        <ul className="ml-product-list-wrapper">
            {
                props.data != undefined ? props.data.length > 0 ?
                    props.data.map((product:ProductType, index:number) => {
                        if (index < (props.data.length > props.maxItems ? props.maxItems : props.data.length)){
                            return (
                                <Product
                                    id={product.id}
                                    title={product.title}
                                    picture={product.picture}
                                    price={product.price}
                                    condition={product.condition}
                                    free_shipping={product.free_shipping}
                                    key={`${product.title} ${index}`}
                                /> 
                            )
                        }
                    }) 
                    : null : null
            }
        </ul>
    )
}

export default List
