//IMPORTS
import React, { useState } from "react"

import { Route, Switch } from "react-router-dom";

//Context
import Context, { ContextType } from './Context'

//Components
import Navbar from "../components/Navbar/Navbar"
import Breadcrumb from "../components/Breadcrumb/Breadcrumb"

//Views
import SearchView from "./search/SearchView"
import ProductView, { ProductDetail } from "./product/ProductView"

//Styles
import "../styles/common/general.scss"

const Layout:React.FunctionComponent = () => {
    const [search, setSearch] = useState<string>('')
    const [searchResult, setSearchResult] = useState<any>([])
    const [selectedProduct, setSelectedProduct] = useState<string>('')
    const [productData, setProductData] = useState<ProductDetail>({
        id: '',
        title: '',
        picture: '',
        price: {
            currency: 'ARS',
            amount: 0,
            decimals: 0
        },
        condition: '',
        free_shipping: false,
        sold_quantity: 0,
        description: ''
    })

    const contextStates:ContextType = {
        search: search,
        setSearch: setSearch,
        searchResult: searchResult,
        setSearchResult: setSearchResult,
        selectedProduct: selectedProduct,
        setSelectedProduct: setSelectedProduct,
        productData: productData,
        setProductData: setProductData
    }

    const handleSearch = (search:string) => {
        setSearch(search)
    }

    return (
        <Context.Provider value={contextStates}>
                <div className="ml-layout">
                    <Navbar
                        color="color-1"
                        onSearch={handleSearch}
                    />
                    <Breadcrumb/>
                    <Switch>
                        <Route exact path={'/'}>
                            <SearchView/>
                        </Route>
                        <Route path={'/product/:id'}>
                            <ProductView/>
                        </Route>
                    </Switch>
                </div>
        </Context.Provider>
    )
}

export default Layout