//IMPORTS
import React from "react"
import Product from "./Product"

type ProductProps = {
}

export type ProductType = {
    name: string,
    image: string,
    price: number,
    other: string
}

const List:React.FunctionComponent<ProductProps> = (props) => {
    return (
        <ul className="ml-product-list-wrapper">
            <Product
                name="Gato"
                image="http://placekitten.com/g/200/200"
                price={1000}
                other="lorem ipsum"
            />
            <Product
                name="Gato 2"
                image="http://placekitten.com/g/200/200"
                price={2000}
                other="lorem ipsum 2"
            />
        </ul>
    )
}

export default List
