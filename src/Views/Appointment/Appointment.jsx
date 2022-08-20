import React, { useRef, useState } from 'react';
import "./Appointment.scss"
import { Navbar } from '../../Components/Navbar/Navbar'
import cita from "../../Assets/Desktop/CitaP.jpeg"
import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"


export const Appointment = () => {
    const form = useRef();
    const [received, setReceived] = useState(false);

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_fxxq3je', 'template_u5s1d1k', form.current, 'bnQweKR5uLmYM447e')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
        console.log('sendEmail')
    };

    const textAnimateR = {
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

    const textAnimateL = {
        offscreen: { x: 100, opacity: 0 },
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
        <div className="appointment">
            <div className="appointment__container">
                <Navbar />
                <div className="appointment__container__general">
                    <div className="appointment__container__general__left">
                        <motion.img src={cita} alt="sastre"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.5 }}
                            variants={textAnimateR} />
                    </div>
                    <div className="appointment__container__general__right">
                        <motion.h1
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.5 }}
                            variants={textAnimateL}>¡Contactanos y Resuelve tus dudas!</motion.h1>
                        <motion.p
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.5 }}
                            variants={textAnimateL}>¿No encuntras lo que necesitas entre nuestros servicios? ¿Tienes algo en mente que sea más personalizado? ¡Estás a tan solo un par de clicks de que podamos ponernos manos a la obra!</motion.p>
                        <a href="https://api.whatsapp.com/send?phone=34699373874&text=Hola%20Muy%20Buenas!%20Estoy%20interesad@%20en%20un%20servicio!" target="_blank" rel="noreferrer">
                            <motion.button
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: false, amount: 0.5 }}
                                variants={textAnimateL}>Contactar</motion.button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="appointment__contacto">
                <h2>Moldeado para ti y a lo que representas</h2>
                <div className="appointment__contacto__icons">
                    <div className="appointment__contacto__icons__individual">
                        <AiOutlineWhatsApp />
                        <a href="https://api.whatsapp.com/send?phone=34699373874&text=Hola%20Muy%20Buenas!%20Estoy%20interesad@%20en%20un%20servicio!" target="_blank" rel="noreferrer">
                            <p>+34 699 373 874</p>
                        </a>
                    </div>
                    <div className="appointment__contacto__icons__individual">
                        <AiOutlineMail />
                        <p>mail@mail.com</p>
                    </div>
                </div>
            </div>
            <div className="appointment__form">
                <form className="form-container" ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="Nombre" name="name" />
                    <input type="email" placeholder="Email" name="email" />
                    <input type="number" placeholder="Teléfono" name="phone" />
                    <input type="text" placeholder="Consulta" name="info" />
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
        </div>
    )
}
