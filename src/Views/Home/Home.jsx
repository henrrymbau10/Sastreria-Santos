import React from 'react'
import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import { Main } from '../../Components/Main/Main'
import { Servicios } from '../../Components/Servicios/Servicios'
import { Us } from '../../Components/Us/Us'

export const Home = () => {
    return (
        <div>
            <Header />
            <Main />
            <Us />
            <Servicios />
            <Footer />
        </div>
    )
}
