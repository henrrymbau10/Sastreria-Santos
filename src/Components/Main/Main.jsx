import React from 'react'
import "./Main.scss"
import medida from "../../Assets/Desktop/Medidas3.jpeg"
import { About } from '../About/About'

export const Main = () => {
    return (
        <div className="main">
            <div className="main__container">
                <div className="main__container__left">
                    <h1>Servicios Personalizados a Medida</h1>
                    <p>Nuestro equipo tiene una experiencia combinada de más de 10 años. Desde el aprendiz de sastre, pasando por el jefe de taller, hasta el maestro sastre, nuestro equipo tiene los conocimientos necesarios para ayudarle a lucir bien.</p>
                    <button> CONSULTA NUESTROS SERVICIOS</button>
                </div>
                <div className="main__container__right">
                    <img src={medida} alt="medida" />
                </div>
            </div>
            <About />
        </div>
    )
}
