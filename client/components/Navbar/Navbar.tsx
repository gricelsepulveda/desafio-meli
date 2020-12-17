//IMPORTS
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Search from "../Search/Search"
import Context from "../../views/Context"

import "./navbar.scss" //Styles

type Navprops = {
    color: 'color-1' | 'color-2';
    onSearch: (search: string) => void
}

const Navbar:React.FunctionComponent<Navprops> = (props) => {
    const context = useContext(Context)
    
    return (
        <nav className={`ml-navbar ${props.color != undefined ? props.color : ''}`}>
            <Link to={"/"}>
                <img 
                    className="ml-navbar-brand"
                    src='https://gricel.sfo2.digitaloceanspaces.com/mercadolibre/logo-meli-desktop.png'
                    alt="logo mercadolibre"
                    tabIndex={0}
                />
            </Link>
            <Search 
                placeholder="Buscar productos, marcas y más..."
                maxItems={5}
                onSearch={props.onSearch}
            />
        </nav>
    )
}

export default Navbar
