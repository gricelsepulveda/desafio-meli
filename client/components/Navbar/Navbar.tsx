//IMPORTS
import React, { useContext } from "react"
import Search from "../Search/Search"
import AppContext from "../../views/Context"

import "./navbar.scss" //Styles

type Navprops = {
    color: 'color-1' | 'color-2';
    desktopLogo: string, 
    mobileLogo: string,
}

const Navbar:React.FunctionComponent<Navprops> = (props) => {
    const context = useContext(AppContext)
    
    return (
        <nav className={`ml-navbar ${props.color != undefined ? props.color : ''}`}>
            <img className="ml-navbar-brand" src={context.viewport == 'mobile' ? props.mobileLogo : props.desktopLogo} alt="logo mercadolibre"/>
            <Search 
                placeholder="Buscar productos, marcas y más..."
                maxItems={5}
            />
        </nav>
    )
}

export default Navbar
