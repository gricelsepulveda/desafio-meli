//IMPORTS
import React, { useState, useContext, useEffect } from "react"
import { ProductType } from "../ProductList/List"

//Context
import Context from "../../views/Context"

import "./search.scss" //Styles

type SearchProps = {
    placeholder: string | undefined,
    maxItems: number,
    onSearch: (search: string) => void
}

export type SearchResult = {
    author: {
        name: string,
        lastname: string
    },
    categories: string[],
    items: ProductType[]
}

const Search:React.FunctionComponent<SearchProps> = (props) => {
    const context = useContext(Context)

    const [active, setActive] = useState(false)

    const handleActive = (param: boolean) => {
        setActive(param)
    }

    const handleClick = (link:string) => {
        setActive(false)
    }

    const handleChange = (Event:any) => {
        props.onSearch(Event.currentTarget.value)
    }

    const renderList = (data:ProductType[]) => {
        let normalResults:React.ReactElement[] = []
        if (data != undefined){
            if (data.length > 0){
                for (let i:number=0; i < (data.length > props.maxItems ? props.maxItems : data.length); i++){
                    let result = data[i]
                    normalResults.push(
                        <li 
                            className="ml-search-list-element"
                            key={`${result.title.split(' ').join('-')}-${i}`}
                            onClick={() => handleClick('')}
                            tabIndex={0}
                        >
                            <i className="ml-search-list-icon meli-font search"/>
                            <p className="ml-search-list-element-text">
                                { result.title }
                            </p>
                        </li>
                    )
                }
            }
        }
        return normalResults
    }

    useEffect(() => {
    }, [context.searchResult.items, context.search])


    return (
        <div 
            className={`ml-search ${active ? 'active' : ''}`}
            onMouseLeave={() => handleActive(false)}
        >
            <div className="ml-search-wrapper">
                <input
                    onFocus={() => handleActive(true)}
                    onChange={handleChange}
                    type="text"
                    className="ml-search-input"
                    placeholder={props.placeholder ? props.placeholder : 'Buscar...'}
                    tabIndex={0}
                />
                <button type="button" className="ml-search-button" tabIndex={0}>
                    <i className="ml-navbar-icon meli-font search"/>
                </button>
            </div>
            <ul className="ml-search-list">
                { renderList(context.searchResult.items)}
            </ul>
        </div>
    )
}

export default Search
