//IMPORTS
import React, { useState, useContext, useEffect, useRef } from "react"
import { ProductType } from "../../types/types"
import { Link } from "react-router-dom"

//Context
import Context from "../../views/Context"

import "./search.scss" //Styles

type SearchProps = {
    placeholder: string | undefined,
    maxItems: number,
    onSearch: (search: string) => void
}

const Search:React.FunctionComponent<SearchProps> = (props) => {
    const context = useContext(Context)
    const inputRef = useRef(null)

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

        let normalResults:React.ReactElement[] = [
            <li className="ml-search-list-element" aria-label='sin resultados' key="ml-search-empty">
                <p className="ml-search-list-element-text">
                    Sin resultados
                </p>
            </li>
        ]

        if (data != undefined){
            if (data.length > 0){
                normalResults = []
                for (let i:number=0; i < (data.length > props.maxItems ? props.maxItems : data.length); i++){
                    let result = data[i]
                    normalResults.push(
                        <Link aria-label={result.title} to={`/product/${result.id}`} key={`${result.title.split(' ').join('-')}-${i}`}>
                            <li 
                                className="ml-search-list-element"
                                onClick={() => handleClick('')}
                            >
                                <i className="ml-search-list-icon meli-font search"/>
                                <p className="ml-search-list-element-text">
                                    { result.title }
                                </p>
                            </li>
                        </Link>
                    )
                }
            }
        }
        return normalResults
    }

    const fetchResults = async (param:string) => {
        const data = await fetch(`http://localhost:3000/api/items/search/${param}}`)
        .then((response:any) => {
            return response.json()
        })
        context.setSearchResult(data.data)
    }

    let id =  window.location.href.split('/')[4] != undefined ? window.location.href.split('/')[4] : 0
    let searchResultUrl = window.location.href.split('/')

    useEffect(() => {
        if (searchResultUrl.length > 4 && context.search == ''){
            fetchResults(searchResultUrl[4].split('=')[1])
        }
        else {
            fetchResults(context.search)
        }
    }, [context.search, id])


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
