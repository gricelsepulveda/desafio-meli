//IMPORTS
import React, { useContext, useEffect, useState } from "react"

//Context
import Context from "../Context"

//Components
import ProductList from "../../components/ProductList/ProductList"

//DummyData
import dummyProducts from "../../components/ProductList/dummyProducts"

const SearchView:React.FunctionComponent = () => {
    const context = useContext(Context)
    const [searchResult, setSearchResult] = useState([])

    const fetchConversations = async () => {
        const x = await fetch(`http://localhost:3000/api/items/search/${context.search}`)
        .then((response:any) => {
            return response.json()
        })
        console.log(x)
    }

    useEffect(() => {
        fetchConversations()
    }, [context.search])

    return (
        <ProductList data={dummyProducts}/>
    )
}

export default SearchView