import React, { useRef, useState } from 'react';
import "./Footer.scss"
import logo from "../../Assets/Icons/Logo-MaqCos-Black.svg"
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"

export const Footer = () => {

    const form = useRef();
    const [received, setReceived] = useState(false);

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_hyzssx8', 'template_u5s1d1k', form.current, 'bnQweKR5uLmYM447e')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
        console.log('sendEmail')
    };

    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="footer__container__contact">
                    <h2>Ponte en Contacto con Nuestro Equipo</h2>
                    <form className="form-container" ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Nombre" name="name" />
                        <input type="email" placeholder="Email" name="email" />
                        <input type="number" placeholder="Teléfono" name="phone" />
                        <input onClick={() => setReceived(true)} type="submit" className="btn-contact" value="Contáctanos" />
                    </form>
                    {
                        received ? <motion.p
                            className="confirmation"
                            animate={{
                                scale: [0, 1]
                            }}
                            transition={{ ease: "easeOut", duration: 2 }}>Formulario Enviado <b>Correctamente</b></motion.p> : null
                    }
                </div>
                <div className="footer__container__copyright">
                    <p>Copyright © 2022 SASTRERIA SANTOS</p>
                </div>
            </div>
        </div>
    )
}
