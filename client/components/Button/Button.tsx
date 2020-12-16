//IMPORTS
import React from "react"

import "./button.scss" //Styles

type ButtonProps = {
    value: string,
    onClick: () => void,
    color: 'color-1' | 'color-2'
}

const Button:React.FunctionComponent<ButtonProps> = (props) => {

    return (
        <button>
            {props.value}
        </button>
    )
}

export default Button
