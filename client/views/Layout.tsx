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
import ProductView from "./product/ProductView"

//DummyData
import dummyBreadcrumb from "../components/Breadcrumb/dummyBreadcrumb"
import productDetailDummy from "./product/productDetailDummy"

//Styles
import "../styles/common/general.scss"

export type viewport = 'mobile' | 'desktop'


const Layout:React.FunctionComponent = () => {
    const [viewport, setViewport] = useState<'desktop' | 'mobile'>('desktop')
    const [activeView, setActiveView] = useState<string>('')
    //Search related states
    const [search, setSearch] = useState<string>('')
    const [searchResult, setSearchResult] = useState<any>({})
    const [selectedProduct, setSelectedProduct] = useState<string>('')

    const contextStates:ContextType = {
        //General states
        viewport: viewport,
        setViewport: setViewport,
        activeView: activeView,
        setActiveView: setActiveView,
        //Search related states
        search: search,
        setSearch: setSearch,
        searchResult: searchResult,
        setSearchResult: setSearchResult,
        selectedProduct: selectedProduct,
        setSelectedProduct: setSelectedProduct
    }

    const handleSearch = (search:string) => {
        setSearch(search)
    }

    return (
        <Context.Provider value={contextStates}>
                <div className="ml-layout">
                    <Navbar
                        color="color-1"
                        desktopLogo="https://gricel.sfo2.digitaloceanspaces.com/mercadolibre/logo-meli-desktop.png"
                        mobileLogo="https://gricel.sfo2.digitaloceanspaces.com/mercadolibre/logo-meli-mobile.png"
                        onSearch={handleSearch}
                    />
                    <Breadcrumb data={dummyBreadcrumb}/>
                    <Switch>
                        <Route exact path={'/'}>
                            <SearchView/>
                        </Route>
                        <Route exact path={'/product'}>
                            <ProductView productData={productDetailDummy}/>
                        </Route>
                    </Switch>
                </div>
        </Context.Provider>
    )
}

export default Layout