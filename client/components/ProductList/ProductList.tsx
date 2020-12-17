//IMPORTS
import React from "react"
import List, { ProductType } from "./List"

import "./product-list.scss" //Styles

type ProductListProps = {
    data: ProductType[] | []
}

const ProductList:React.FunctionComponent<ProductListProps> = (props) => {
    return (
        <div className="ml-product-list">
            <List data={props.data}/>
        </div>
    )
}

export default ProductList
