import React, {useState, useEffect} from 'react'
import Item from '../item/item.component'

import {fake_items} from '../../mocks/historial'

import './historial.component.css'

function Historial(props){
    var [items, setItems] = useState([])


    useEffect(()=>{
        setItems(fake_items)
    }, [])

    return(
        <div className="item-list">
            {
                items.map(item =>
                    <Item item={item}/>
                )
            }
        </div>
    )
}

export default Historial;