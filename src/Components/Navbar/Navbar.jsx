import React, { useState } from 'react'
import "./Navbar.scss"
import logo from "../../Assets/Icons/Logo-MaqCos-red.svg"
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
                    <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/C.+%C3%81ngel+Ripoll,+11,+28025+Madrid/@40.3826513,-3.7311345,3a,75y,139.57h,90t/data=!3m6!1e1!3m4!1shgW5u8IZiY0YLUE9QNPwyQ!2e0!7i16384!8i8192!4m5!3m4!1s0xd42279060e37681:0xb7faea0318dbf8e9!8m2!3d40.3825988!4d-3.7310833">
                        <li>UBICACIÓN</li>
                    </a>
                    <Link to="/cita">
                        <button>PIDE TU CITA</button>
                    </Link>
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
                        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/C.+%C3%81ngel+Ripoll,+11,+28025+Madrid/@40.3826513,-3.7311345,3a,75y,139.57h,90t/data=!3m6!1e1!3m4!1shgW5u8IZiY0YLUE9QNPwyQ!2e0!7i16384!8i8192!4m5!3m4!1s0xd42279060e37681:0xb7faea0318dbf8e9!8m2!3d40.3825988!4d-3.7310833">
                            <p onClick={() => { scrollTo(('.informacion-title')); setShowMobileMenu(!showMobileMenu) }}>UBICACIÓN</p>
                        </a>
                        <Link to="/cita">
                            <p className="p-menu" onClick={() => { scrollTo(('#entradas')); setShowMobileMenu(!showMobileMenu) }}>PIDE TU CITA</p>
                        </Link>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
