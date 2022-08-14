import React from 'react'
import whatsapp from "../../Assets/Icons/whatsapp-svgrepo-com.svg"
import { Navbar } from '../Navbar/Navbar'
import "./Header.scss"


export const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <div className="header__container">
                <p>SASTRERIA SANTOS</p>
                <h1>Arreglos y Confeccion</h1>
                <button>VER SERVICIOS</button>
                <img src={whatsapp} alt="whatsapp" />
            </div>
        </div>
    )
}
