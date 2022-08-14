import React from 'react'
import "./Us.scss"
import nosotros from "../../Assets/Desktop/Nosotros.jpeg"
import { Link } from "react-router-dom"

export const Us = () => {
    return (
        <div className="us">
            <div className="us__container">
                <div className="us__container__left">
                    <img src={nosotros} alt="nosotros" />
                </div>
                <div className="us__container__right">
                    <h1>¿POR QUE NOSOTROS?</h1>
                    <p>Utilizando las mejores prácticas de sastrería y cumpliendo los más altos estándares de calidad en la confección. Nos centramos en la calidad. No somos los más baratos, pero sí los mejores.</p>
                    <Link to="/cita">
                        <button>CONTACTANOS</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
