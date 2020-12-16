//IMPORTS
import React from "react"

//Components
import Navbar from "../components/Navbar/Navbar"
import Breadcrumb from "../components/Breadcrumb/Breadcrumb"

//Views
import SearchView from "./SearchView"

//DummyData
import dummyBreadcrumb from "../components/Breadcrumb/dummyBreadcrumb"

//Styles
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
            <Breadcrumb data={dummyBreadcrumb}/>
            <SearchView/>
        </div>
    )
}

export default Layout