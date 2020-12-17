//IMPORTS
import React, { useContext, useEffect} from "react"

//Context
import Context from "../Context"

//Components
import ProductList from "../../components/ProductList/ProductList"

const SearchView:React.FunctionComponent = () => {
    const context = useContext(Context)

    const fetchResults = async () => {
        const data = await fetch(`http://localhost:3000/api/items/search/${context.search}`)
        .then((response:any) => {
            return response.json()
        })
        context.setSearchResult(data.data)
    }

    useEffect(() => {
        fetchResults()
    }, [context.search])

    return (
        <ProductList 
            data={context.searchResult.items != undefined ? context.searchResult.items : []}
            maxItems={20}
        />
    )
}

export default SearchView