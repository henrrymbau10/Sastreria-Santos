import React from 'react'
import "./About.scss"
import { motion } from "framer-motion"

export const About = () => {

    const textAnimate = {
        offscreen: { x: -100, opacity: 0 },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2.5
            }
        }
    }

    return (
        <div className="about">
            <div className="about__container1">
                <div className="about__container1__section">
                    <motion.h1
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={textAnimate}>CUENTA CON UN EQUIPO EXPERIMENTADO</motion.h1>
                    <motion.p
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={textAnimate}>Contamos con una experiencia de más de 15 años en el sector textil, satisfaciendo las necesidades de nuestros clientes, con un equipo de trabajo comprometido a ayudarle a lucir bien.</motion.p>
                </div>
            </div>
            <div className="about__container2">
                <div className="about__container2__section">
                    <motion.h1
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={textAnimate}>CENTRADOS EN LA CALIDAD</motion.h1>
                    <motion.p
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={textAnimate}>La calidad y el servicio es nuestro principal objetivo y es la base de nuestra empresa. Nos tomamos nuestro tiempo y lo hacemos bien.</motion.p>
                </div>
            </div>
            <div className="about__container3">
                <div className="about__container3__section">
                    <motion.h1
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={textAnimate}>SOMOS FIABLES</motion.h1>
                    <motion.p
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 0.2 }}
                        variants={textAnimate}>En Sastrería Santos, tenemos a su disposición un equipo de colaboradores altamente cualificados para asesorarle y guiarle en sus dudas e inquietudes, aportando ideas y soluciones para que el arreglo de sus prendas sea el mejor. </motion.p>
                </div>
            </div>
        </div>
    )
}
