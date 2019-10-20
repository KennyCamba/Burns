import React, {useState} from 'react'
import {slide as Menu} from 'react-burger-menu'

import Historial from '../historial/historial.component'
import MenuOption from '../index/menu-option/menu-option.component'

import './index.component.css'
import logo from './burns11.svg'
import hamburguer from './desglose.svg'
import buttonpanic from './botonpanico1.svg'

export default function Index(){

    var [historial, setHistorial] = useState([])

    function do_report(e){
        console.log("sending ...")
    }

    return (
        <div id="main-wrap">
            <div className="body-container">
                <header>
                    <Menu pageWrapId={"main-wrap"} customBurgerIcon={ <img className="hamburguer" src={hamburguer}/>}>
                        <MenuOption label="Home" />
                        <MenuOption label="About" />
                        <MenuOption label="Contact" />
                    </Menu>
                    <div className="logo-container"> 
                        <img src={logo} className=""/>
                    </div>
                </header>
                <main id="main-wrap">
                    <Historial/>
                </main>
                <footer>
                    <div className="circular-button big">
                        <img src={buttonpanic} className="svg-button"/>
                    </div>
                </footer>
            </div>
        </div>
        
    )
}