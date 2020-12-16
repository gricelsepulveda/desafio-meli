//IMPORTS
import React, { useState, useEffect } from "react"
import { dummySearch } from "./dummySearch"

import "./search.scss" //Styles

type SearchProps = {
    placeholder: string | undefined,
    maxItems: number
}

export type SearchResult = {
    name: string,
    history: boolean,
    promoted: boolean,
    promotedShopName: string,
    promotedShopLink: string,
    link: string
}

const Search:React.FunctionComponent<SearchProps> = (props) => {
    const [active, setActive] = useState(false)
    const [search, setSearch] = useState('')

    const handleActive = (param: boolean) => {
        setActive(param)
    }

    const handleClick = (link:string) => {
        setActive(false)
    }

    const handleChange = (Event:any) => {
        setSearch(Event.currentTarget.value)
    }

    const renderList = (data:SearchResult[]) => {
        let normalResults:React.ReactElement[] = []
        let promotedResults:React.ReactElement[] = [
            <h2 className="ml-search-list-element-title">
                Tiendas oficiales
            </h2>
        ]
        for (let i=0; i < data.length; i++){
            let result = data[i]
            if (result.promoted == false){
                normalResults.push(
                    <li 
                        className="ml-search-list-element"
                        key={`${result.name}-${i}`}
                        onClick={() => handleClick(result.link)}
                    >
                        <i 
                            className={`ml-search-list-icon meli-font ${result.history ? "clock" : "search"}`}
                        />
                        <p className="ml-search-list-element-text">
                            { result.name }
                        </p>
                    </li>
                )
            }
            else {
                promotedResults.push(
                    <li 
                        className={'ml-search-list-element official'}
                        key={`${result.name}-${i}`}
                        onClick={() => handleClick(result.link)}
                    >
                        <i 
                            className={`ml-search-list-icon meli-font ${result.history ? "clock" : "search"}`}
                        />
                        <p className="ml-search-list-element-text">
                            {`${result.name} en `}                        <a 
                                className="ml-search-list-element-link"
                                href={result.promotedShopLink}
                            >
                                {`${result.promotedShopName}`}
                            </a>
                        </p>
                    </li>
                )
            }
        }
        return [...normalResults, promotedResults]
    }

    useEffect(() => {
        if (search != ''){
                fetch(`https://api.mercadolibre.com/sites/MLA/search?q=​:${search}`)
                .then(response => response.json())
                .then(results => console.log(results))
        }
    }, [search])

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
                />
                <button type="button" className="ml-search-button">
                    <i className="ml-navbar-icon meli-font search"/>
                </button>
            </div>
            <ul className="ml-search-list">
                { renderList(dummySearch) }
            </ul>
        </div>
    )
}

export default Search