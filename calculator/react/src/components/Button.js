import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className={props.classes} value={props.value} onClick={props.handleClick} disabled={props.disabled}>{props.text}</button>
        </div>
    )
}

export default Button
