//IMPORTS
import React, { useContext } from "react"
import Search from "../Search/Search"
import Context from "../../views/Context"

import "./navbar.scss" //Styles

type Navprops = {
    color: 'color-1' | 'color-2';
    desktopLogo: string, 
    mobileLogo: string,
    onSearch: (search: string) => void
}

const Navbar:React.FunctionComponent<Navprops> = (props) => {
    const context = useContext(Context)
    const handleHome = () => {
        //@ts-ignore
        window.location = 'http://localhost:8080'
    }
    return (
        <nav className={`ml-navbar ${props.color != undefined ? props.color : ''}`}>
            <img 
                className="ml-navbar-brand"
                src={context.viewport == 'mobile' ? props.mobileLogo : props.desktopLogo}
                alt="logo mercadolibre"
                tabIndex={0}
                onClick={handleHome}
            />
            <Search 
                placeholder="Buscar productos, marcas y más..."
                maxItems={5}
                onSearch={props.onSearch}
            />
        </nav>
    )
}

export default Navbar
