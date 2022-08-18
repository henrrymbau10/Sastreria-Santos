import React from 'react'
import "./Servicios.scss"
import clothing from "../../Assets/Icons/clothing.png"
import jeans from "../../Assets/Icons/jeans.png"
import iron from "../../Assets/Icons/iron.png"
import dressmaker from "../../Assets/Icons/dressmaker.png"
import measure from "../../Assets/Icons/measure.png"
import tailor from "../../Assets/Icons/tailor.png"
import tailoring from "../../Assets/Icons/tailoring.png"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


export const Servicios = () => {

    const textAnimateAppear = {
        offscreen: { x: 0, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 7
            }
        }
    }

    return (
        <div className="servicios">
            <div className="servicios__container">
                <div className="servicios__container__tittle">
                    <motion.h1
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={textAnimateAppear}>Nuestros Servicios</motion.h1>
                </div>
                <div className="servicios__container__general">
                    <div className="servicios__container__general__individual">
                        <motion.img
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear} src={clothing} alt="ropa" />
                        <motion.p
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear}>CONFECCION DE PRENDAS</motion.p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <motion.img
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear} src={jeans} alt="ropa" />
                        <motion.p
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear}>METER TRASERA VAQUERO</motion.p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <motion.img
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear} src={dressmaker} alt="ropa" />
                        <motion.p
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear}>PONER CREMALLERA</motion.p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <motion.img
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear} src={measure} alt="ropa" />
                        <motion.p
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear}>BAJO CON ABERTURA Y FORRO</motion.p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <motion.img
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear} src={tailor} alt="ropa" />
                        <motion.p
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear}>BAJAR CINTURILLA</motion.p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <motion.img
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear} src={tailoring} alt="ropa" />
                        <motion.p
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear}>SUBIR BAJO A MANO</motion.p>
                    </div>
                    <div className="servicios__container__general__individual">
                        <motion.img
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear} src={iron} alt="ropa" />
                        <motion.p
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear}>OTROS</motion.p>
                    </div>
                </div>
                <div className="servicios__container__button">
                    <Link to="/precios">
                        <motion.button
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear}>VER TODOS LOS SERVICIOS</motion.button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
