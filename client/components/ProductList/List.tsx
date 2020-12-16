//IMPORTS
import React from "react"
import Product from "./Product"

export type ProductType = {
    name: string,
    image: string,
    price: number,
    other: string
}

type ProductProps = {
    data: ProductType[]
}

const List:React.FunctionComponent<ProductProps> = (props) => {
    return (
        <ul className="ml-product-list-wrapper">
            {
                props.data.map((product:ProductType, index:number) => 
                    <Product
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        other={product.other}
                        key={`${product.name} ${index}`}
                    />
                )
            }
        </ul>
    )
}

export default List
