//IMPORTS
import React, { useContext } from "react"
import Search from "../Search/Search"
import Context from "../../views/Context"

import "./navbar.scss" //Styles

type Navprops = {
    color: 'color-1' | 'color-2';
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
                src='https://gricel.sfo2.digitaloceanspaces.com/mercadolibre/logo-meli-desktop.png'
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
