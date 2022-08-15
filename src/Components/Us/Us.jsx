import React from 'react'
import "./Us.scss"
import nosotros from "../../Assets/Desktop/Nosotros.jpeg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const Us = () => {

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
        <div className="us">
            <div className="us__container">
                <div className="us__container__left">
                    <img src={nosotros} alt="nosotros" />
                </div>
                <div className="us__container__right">
                    <motion.h1
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={textAnimateAppear}>¿POR QUE NOSOTROS?</motion.h1>
                    <motion.p
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={textAnimateAppear}>Utilizando las mejores prácticas de sastrería y cumpliendo los más altos estándares de calidad en la confección. Nos centramos en la calidad. No somos los más baratos, pero sí los mejores.</motion.p>
                    <Link to="/cita">
                        <motion.button
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.2 }}
                            variants={textAnimateAppear}>CONTACTANOS</motion.button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
