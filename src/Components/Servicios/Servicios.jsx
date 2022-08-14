import React from 'react'
import "./Servicios.scss"
import clothing from "../../Assets/Icons/clothing.png"
import jeans from "../../Assets/Icons/jeans.png"
import iron from "../../Assets/Icons/iron.png"
import dressmaker from "../../Assets/Icons/dressmaker.png"
import measure from "../../Assets/Icons/measure.png"
import tailor from "../../Assets/Icons/tailor.png"
import tailoring from "../../Assets/Icons/tailoring.png"


export const Servicios = () => {
    return (
        <div className="servicios">
            <div className="servicios__container">
                <div className="servicios__container__tittle">
                    <h1>Nuestros Servicios</h1>
                </div>
                <div className="servicios__container__general">
                    <div className="servicios__container__general__individual">
                        <img src={clothing} alt="ropa" />
                        <p>Acortar / Ajustar la cintura</p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <img src={jeans} alt="ropa" />
                        <p>Acortar / Ajustar la cintura</p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <img src={iron} alt="ropa" />
                        <p>Acortar / Ajustar la cintura</p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <img src={dressmaker} alt="ropa" />
                        <p>Acortar / Ajustar la cintura</p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <img src={measure} alt="ropa" />
                        <p>Acortar / Ajustar la cintura</p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <img src={tailor} alt="ropa" />
                        <p>Acortar / Ajustar la cintura</p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <img src={tailoring} alt="ropa" />
                        <p>Acortar / Ajustar la cintura</p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <img src={clothing} alt="ropa" />
                        <p>Acortar / Ajustar la cintura</p>
                    </div>
                </div>
                <div className="servicios__container__button">
                    <button>Descarga Nuestro Catalago</button>
                </div>
            </div>
        </div>
    )
}
