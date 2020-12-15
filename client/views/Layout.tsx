//IMPORTS
import React from "react"
import Navbar from "../components/Navbar/Navbar"
import ProductList from "../components/ProductList/ProductList"
import "../styles/common/general.scss"

export type viewport = 'mobile' | 'desktop'

interface LayoutProps {
    viewport: viewport
}

const Layout:React.FunctionComponent<LayoutProps> = (props) => {
    return (
        <div className="ml-layout">
            <Navbar
                color="color-1"
                desktopLogo="https://gricel.sfo2.digitaloceanspaces.com/mercadolibre/logo-meli-desktop.png"
                mobileLogo="https://gricel.sfo2.digitaloceanspaces.com/mercadolibre/logo-meli-mobile.png"
            />
            <ProductList/>
        </div>
    )
}

export default Layout