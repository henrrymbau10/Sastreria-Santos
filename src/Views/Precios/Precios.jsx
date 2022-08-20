import React from 'react'
import "./Precios.scss"
import precios from "../../Assets/Desktop/Sastreria Santos - Precios.pdf"
import { Link } from "react-router-dom"

export const Precios = () => {
    return (
        <div className="precios">
            <div className="precios__container">
                <div className="precios__container__tittle">
                    <h1>Lista de Precios</h1>
                </div>
                <div className="precios__container__precios">
                    <div className="precios__container__precios__left">
                        <h2>Pantalones</h2>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR BAJO A MÁQUINA</p>
                            <p>4€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR BAJO MANO</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR BAJO ORIGINAL</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR BAJO CON VUELTA</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBRI BAJO CON TALONERAS</p>
                            <p>7€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>PONER CREMALLERA VAQUERO</p>
                            <p>5€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>PONER CREMALLERA VESTIR</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DOS COSTADO</p>
                            <p>5€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DOS COSTADOS CON CINTURILLA</p>
                            <p>8€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJAR CINTURILLA</p>
                            <p>10€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJAR CINTURILLA CON CREMALLERA</p>
                            <p>15€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER TRASERA VAQUERO</p>
                            <p>5€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER TRASERA DE VESTIR</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SACAR TRASERA DE VESTIR</p>
                            <p>5€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>PONER GOMA EN CINTURILLA</p>
                            <p>7€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>PONER CUCHILLA VAQUERO CON CURCIDO</p>
                            <p>10€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>PONER CUCHILLA DE VESTIR</p>
                            <p>12€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER CUATRO COSTADOS DE VESTIR</p>
                            <p>12€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METEER CUATRO COSTADOS DE VESTIR CON BAJO</p>
                            <p>15€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER CUATRO COSTADOS DE VAQUERO CON BAJO</p>
                            <p>14€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER CUATRO COSTADOS DE VAQUERO</p>
                            <p>12€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SOLTAR CINTURILLA DE VESTIR</p>
                            <p>12€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SOLTAR CINTURILLA CON PINZA</p>
                            <p>15€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>ENSANCHAR VAQUERO CINTURILLA</p>
                            <p>12€</p>
                        </div>
                    </div>
                    <div className="precios__container__precios__left">
                        <h2>Falda</h2>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR BAJO A MÁQUINA</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR BAJO MANO</p>
                            <p>8€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR BAJO CON FORRO</p>
                            <p>10€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DOS COSTADO</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DOS COSTADO CON FORRO</p>
                            <p>8€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DOS COSTADO CON FORRO Y CINTURILLA</p>
                            <p>10€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJAR CINTURILLA</p>
                            <p>12€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJAR CINTURILLA CON CREMALLERA</p>
                            <p>18€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJAR CINTURILLA CON FORRO Y CREMALLERA</p>
                            <p>20€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>PONER CREMALLERA</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>PONER CREMALLERA CON FORRO</p>
                            <p>7€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO A MANO CON ABERTURA</p>
                            <p>8€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO A MANO CON FORRO Y ABERTURA</p>
                            <p>10€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO CON VUELO</p>
                            <p>10€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO CON FORRO Y VUELO</p>
                            <p>12€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>PONER GOMA</p>
                            <p>8€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>PONER GOMA CON CREMALLERA</p>
                            <p>15€</p>
                        </div>
                    </div>
                    <div className="precios__container__precios__left">
                        <h2>Vestido</h2>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO A MÁQUINA</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO A MANO</p>
                            <p>8€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>PONER CREMALLERA</p>
                            <p>8€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>PONER CREMALLERA CON FORRO</p>
                            <p>10€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>PONER CREMALLERA MAS DE 25 cm</p>
                            <p>12€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER DOS COSTADO</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER DOS COSTADO CON FORRO</p>
                            <p>12€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER DOS COSTADO CON FORRO Y CREMALLERA</p>
                            <p>15€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER TIRANTE</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER TIRANTE CON FORRO</p>
                            <p>10€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER ESCOTE CON FORRO</p>
                            <p>15€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER HOMBRO CON FORRO</p>
                            <p>15€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO CON VUELO Y FORRO</p>
                            <p>15€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO A MANO CON FORRO</p>
                            <p>10€</p>
                        </div>
                    </div>
                    <div className="precios__container__precios__left">
                        <h2>Blusa y camisa</h2>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR BAJO A MÁQUINA</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>JUBIR BAJO CON FORMA</p>
                            <p>8€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR BAJO CON ABERTURA</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR MANGA A MÁQUINA</p>
                            <p>5€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR MANGA A MANO</p>
                            <p>8€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DOS COSTADO</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DOS COSTADO CON CREMALLES</p>
                            <p>10€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER HOMBRO</p>
                            <p>8€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DAR VUELTA LA CUELLO</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR PUÑOS</p>
                            <p>6€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR PUÑOS CON PRESILLA</p>
                            <p>10€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR BAJO ORIGINAL</p>
                            <p>10€</p>
                        </div>
                    </div>
                    <div className="precios__container__precios__left">
                        <h2>Americana</h2>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO CON ABERTURA Y FORRO</p>
                            <p>20€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO SIN ABERTURA Y FORRO</p>
                            <p>15€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER HOMBRO</p>
                            <p>15€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DOS COSTADO</p>
                            <p>15€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DOS COSTADO Y TRASERA</p>
                            <p>25€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR MANGA CON BOTONES Y FORRO</p>
                            <p>18€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR MANGA ORIGINAL</p>
                            <p>18€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER SOLO TRASERA CON FORRO</p>
                            <p>15€</p>
                        </div>
                    </div>
                    <div className="precios__container__precios__left">
                        <h2>Abrigo</h2>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR BAJO A MÁQUINA</p>
                            <p>12€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR BAJO CON FORRO Y ABERTURA</p>
                            <p>20€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DOS COSTADO</p>
                            <p>12€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DOS COSTADO CON FORRO</p>
                            <p>15€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>DOS COSTADO CON MANGA Y FORRO</p>
                            <p>20€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER HOMBRO</p>
                            <p>20€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR MANGA</p>
                            <p>12€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>SUBIR MANGA CON BOTONES</p>
                            <p>18€</p>
                        </div>
                    </div>
                    <div className="precios__container__precios__left">
                        <h2>Camiseta y Polo</h2>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO A MÁQUINA</p>
                            <p>5€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO CON ABERTURA</p>
                            <p>7€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>BAJO CON ABERTURA Y VIVO</p>
                            <p>8€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER ANCHO</p>
                            <p>5€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>METER ANCHO CON ABERTURA</p>
                            <p>8€</p>
                        </div>
                    </div>
                    <div className="precios__container__precios__left">
                        <h2>Otros</h2>
                        <div className="precios__container__precios__left__individual">
                            <p>COSER POR METRO LINEAL DOBLADILLO Y DESPUNTE</p>
                            <p>2€</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>CONFECCIÓN DE TODO <br></br> TIPO DE PRENDA DE VESTIR</p>
                            <p>Consúltanos</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>CONFECCIÓN DE CORTINA/MANTEL</p>
                            <p>Consúltanos</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>CONFECCIÓN DE BISILLO/ALMOHADAS</p>
                            <p>Consúltanos</p>
                        </div>
                        <div className="precios__container__precios__left__individual">
                            <p>CONFECCIÓN DE SOFAS/DELANTALES Y MÁS</p>
                            <p>Consúltanos</p>
                        </div>
                    </div>
                </div>
                <div className="precios__container__button">
                    <a href={precios} download>
                        <button>Descargar PDF</button>
                    </a>
                    <Link to="/cita">
                        <button>PIDE TU CITA</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
