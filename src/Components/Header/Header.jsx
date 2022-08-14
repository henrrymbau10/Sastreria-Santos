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
                <a href="https://api.whatsapp.com/send?phone=34699373874&text=Hola%20Muy%20Buenas!%20Podemos%20agendar%20una%20llamada?" target="_blank" rel="noreferrer">
                    <img src={whatsapp} alt="whatsapp" />
                </a>
            </div>
        </div>
    )
}
