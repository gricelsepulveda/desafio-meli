//IMPORTS
import React from "react"

import "./breadcrumb.scss" //Styles

export type BreadcrumbType = {
    name: string,
    link: string
}

type BreadcrumbProps = {
    data: BreadcrumbType[]
}

const Breadcrumb:React.FunctionComponent<BreadcrumbProps> = (props) => {

    const renderBreadcrumblist = (data:BreadcrumbType[]) => {
        return data.map((breadcrumb, index) => 
            <li className="ml-breadcrumb-element" key={`${breadcrumb.name}-${index}`}>
                <a className="ml-breadcrumb-link" href={breadcrumb.link} tabIndex={0}>
                    {breadcrumb.name}
                </a>
            </li>
        )
    }

    return (
        <ul className="ml-breadcrumb">
            { renderBreadcrumblist(props.data) }
        </ul>
    )
}

export default Breadcrumb
