import React from 'react'
import "./Appointment.scss"
import { Navbar } from '../../Components/Navbar/Navbar'
import { AiOutlinePhone } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';

export const Appointment = () => {
    return (
        <div className="appointment">
            <Navbar />
            <div className="appointment__header">
                <h1>Pide tu cita</h1>
            </div>
            <div className="appointment__container">
                <div className="appointment__container__map">

                </div>
                <div className="appointment__container__meet">
                    <h1>Conocenos</h1>
                    <div className="appointment__container__meet__individual">
                        <AiOutlinePhone />
                        <p>+34 777 777 777</p>
                    </div>
                    <div className="appointment__container__meet__individual">
                        <MdAlternateEmail />
                        <p>Correo@correo.com</p>
                    </div>
                    <div className="appointment__container__meet__individual">
                        <GoLocation />
                        <p>Calle numero apartamento</p>
                    </div>
                </div>
                <div className="appointment__container__pitch">

                </div>
            </div>
        </div>
    )
}
