import React from 'react'
import whatsapp from "../../Assets/Icons/whatsapp-svgrepo-com.svg"
import { Navbar } from '../Navbar/Navbar'
import "./Header.scss"
import { motion } from "framer-motion"


export const Header = () => {

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
        <div className="header">
            <Navbar />
            <div className="header__container">
                <motion.p
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.2 }}
                    variants={textAnimateAppear}>SASTRERÍA SANTOS</motion.p>
                <motion.h1
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.2 }}
                    variants={textAnimateAppear}>Arreglos y Confección</motion.h1>
                <motion.button
                    onClick={() => scrollTo(".servicios")}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: false, amount: 0.2 }}
                    variants={textAnimateAppear}>VER SERVICIOS</motion.button>
                <a href="https://api.whatsapp.com/send?phone=34699373874&text=Hola%20Muy%20Buenas!%20Podemos%20agendar%20una%20llamada?" target="_blank" rel="noreferrer">
                    <img src={whatsapp} alt="whatsapp" />
                </a>
            </div>
        </div>
    )
}
