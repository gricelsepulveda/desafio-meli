//IMPORTS
import React, { Props } from "react"
import Product from "./Product"
import { Price, ProductType } from "../../../types/types"

type ProductProps = {
    data: ProductType[],
    maxItems: number
}

const List:React.FunctionComponent<ProductProps> = (props) => {
    const empty = <p className="ml-empty">Usa el buscador para ver resultados</p>
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
                    : empty : empty
            }
        </ul>
    )
}

export default List
