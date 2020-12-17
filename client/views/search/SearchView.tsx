//IMPORTS
import React, { useContext, useEffect} from "react"

//Context
import Context from "../Context"

//Components
import ProductList from "../../components/ProductList/ProductList"

const SearchView:React.FunctionComponent = () => {
    const context = useContext(Context)

    return (
        <ProductList 
            data={context.searchResult.items != undefined ? context.searchResult.items : []}
            maxItems={20}
        />
    )
}

export default SearchView