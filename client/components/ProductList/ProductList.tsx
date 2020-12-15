//IMPORTS
import React from "react"
import List from "./List"

import "./product-list.scss" //Styles

type ProductListProps = {
}

const ProductList:React.FunctionComponent<ProductListProps> = (props) => {
    return (
        <div className="ml-product-list">
            <List/>
        </div>
    )
}

export default ProductList
