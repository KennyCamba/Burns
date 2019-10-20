import React from 'react'
import './menu-option.component.css'

function MenuOption(props){

    return(
        <div className={props.className}>
            <a id="home" className="menu-item" href="/">{props.label}</a>
        </div>
    )
}

export default MenuOption;