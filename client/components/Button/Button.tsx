//IMPORTS
import React from "react"

import "./button.scss" //Styles

type ButtonProps = {
    value: string,
    onClick: (Event: any) => void,
    color: 'color-1' | 'color-2',
    disabled: boolean,
    size: 'auto' | 'full',
    tabIndex: number
}

const Button:React.FunctionComponent<ButtonProps> = (props) => {

    const handleClick = (Event:any) => {
        props.onClick(Event)
    }

    return (
        <button 
            className={
                `ml-button 
                ${props.color} 
                ${props.disabled ? 'disabled' : ''}
                ${props.size == 'full' ? props.size : ''}
            `}
            disabled={props.disabled}
            onClick={handleClick}
            tabIndex={props.tabIndex}
        >
            {props.value}
        </button>
    )
}

export default Button
