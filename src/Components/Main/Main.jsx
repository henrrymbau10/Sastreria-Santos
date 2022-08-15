import React from 'react'
import "./Main.scss"
import medida from "../../Assets/Desktop/Medidas3.jpeg"
import { About } from '../About/About'
import { motion } from "framer-motion"

export const Main = () => {

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

    const scrollTo = (nodeSelector) => {
        const domNode = document.querySelector(nodeSelector)
        window.scrollTo?.({ top: domNode.offsetTop, behavior: 'smooth' });
    }

    return (
        <div className="main">
            <div className="main__container">
                <div className="main__container__left">
                    <motion.h1
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={textAnimateAppear}>Servicios Personalizados a Medida</motion.h1>
                    <motion.p
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={textAnimateAppear}>Nuestro equipo tiene una experiencia combinada de más de 10 años. Desde el aprendiz de sastre, pasando por el jefe de taller, hasta el maestro sastre, nuestro equipo tiene los conocimientos necesarios para ayudarle a lucir bien.</motion.p>
                    <motion.button
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={textAnimateAppear} onClick={() => scrollTo(".servicios")}> CONSULTA NUESTROS SERVICIOS</motion.button>
                </div>
                <div className="main__container__right">
                    <img src={medida} alt="medida" />
                </div>
            </div>
            <About />
        </div>
    )
}
