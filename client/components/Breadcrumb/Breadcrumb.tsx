//IMPORTS
import React, {useContext, useEffect} from "react"
import Context from "../../views/Context"
import { SearchResult } from "../Search/Search"

import "./breadcrumb.scss" //Styles

const Breadcrumb:React.FunctionComponent = () => {
    const context = useContext(Context)
    const renderBreadcrumblist = (data:SearchResult['categories']) => {
        if (data != undefined) {
            return data.map((breadcrumb, index) => 
                <li className="ml-breadcrumb-element" key={`${breadcrumb}-${index}`}>
                    <a className="ml-breadcrumb-link" href='#' tabIndex={0}>
                        {breadcrumb}
                    </a>
                </li>
            )
        }
        else {
            return (   
                <li className="ml-breadcrumb-element empty" key={`ml-breadcrumb-empty-0`}>
                    <a className="ml-breadcrumb-link" href='#' tabIndex={0}>
                        Todo
                    </a>
                </li>
            )
        }
    }

    useEffect(() => {}, [context.searchResult])

    return (
        <ul className="ml-breadcrumb">
            { renderBreadcrumblist(context.searchResult.categories) }
        </ul>
    )
}

export default Breadcrumb
