import React, { useState } from 'react'
import "./Navbar.scss"
import logo from "../../Assets/Icons/Consuelo-Logo4-AV-Blanco.svg"
import { Menu, MobileIcon, MobileIcon2 } from './NabvarItem';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom"

export const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)
        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }

    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__container__logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar__container__list">
                    <li onClick={() => scrollTo(".servicios")}>SERVICIOS</li>
                    <li onClick={() => scrollTo(".about")}>NOSOTROS</li>
                    <li>CONTACTANOS</li>
                    <li>UBICACION</li>
                    <button>PIDE TU CITA</button>
                </div>
                <div className="navbar__container__mobile">
                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <FaBars />
                    </MobileIcon>

                    <Menu open={showMobileMenu}>
                        <MobileIcon2 onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <FaTimes />
                        </MobileIcon2>
                        <p onClick={() => { scrollTo(('.servicios')); setShowMobileMenu(!showMobileMenu) }}>SERVICIOS</p>
                        <p onClick={() => { scrollTo(('.about')); setShowMobileMenu(!showMobileMenu) }}>NOSOTROS</p>
                        <p onClick={() => { scrollTo(('.itinerary')); setShowMobileMenu(!showMobileMenu) }}>CONTACTANOS</p>
                        <p onClick={() => { scrollTo(('.informacion-title')); setShowMobileMenu(!showMobileMenu) }}>UBICACION</p>
                        <p className="p-menu" onClick={() => { scrollTo(('#entradas')); setShowMobileMenu(!showMobileMenu) }}>PIDE TU CITA</p>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
