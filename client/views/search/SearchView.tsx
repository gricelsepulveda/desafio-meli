//IMPORTS
import React from "react"

//Components
import ProductList from "../../components/ProductList/ProductList"

//DummyData
import dummyProducts from "../../components/ProductList/dummyProducts"

const SearchView:React.FunctionComponent = () => {
    return (
        <ProductList data={dummyProducts}/>
    )
}

export default SearchView