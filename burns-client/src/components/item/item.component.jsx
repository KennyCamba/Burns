import React, {useState} from 'react'

function Item(props){
    
    return(
        <div className="item">
            <h2>{props.item.title}</h2>
            <span>{props.item.description}</span>
        </div>
    )
}

export default Item