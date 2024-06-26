import React from 'react'
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES =[
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize
}) =>{
    const checkButtonStyle =STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <button className={'btn ${checkButtonStyle} ${checkbuttonSize}'} onClick={onclick}
        type={type}>
            
            {children}
        </button>
    )
}