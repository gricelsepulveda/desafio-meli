//IMPORTS
import React, { useContext, useEffect, useState } from "react"

//Context
import Context from "../Context"


//Components
import ProductList from "../../components/ProductList/ProductList"
import { SearchResult } from "../../components/Search/Search"

const SearchView:React.FunctionComponent = () => {
    const context = useContext(Context)
    const [searchResult, setSearchResult] = useState<SearchResult>(context.searchResult)

    const fetchResults = async () => {
        const data = await fetch(`http://localhost:3000/api/items/search/${context.search}`)
        .then((response:any) => {
            return response.json()
        })
        setSearchResult(data.data)
    }

    useEffect(() => {
        fetchResults()
    }, [context.search])

    return (
        <ProductList data={searchResult.items != undefined ? searchResult.items : []}/>
    )
}

export default SearchView