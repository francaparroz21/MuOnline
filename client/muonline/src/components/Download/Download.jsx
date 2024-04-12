import Carousel from "../CarouselImages/CarouselImages";
import "./Download.css"
import { Link } from "react-router-dom";

const Download = () => {
    return (
        <>
            <div className="container-fluid text-center">
                <div className="fondo-tras">
                    <div className="row">
                        <div className="carousel-download col-12 ">
                            <Carousel className="carousel-download-page" />
                        </div>
                    </div>
                    <div className="row second-row">
                        <div className="historia col-6">
                            <h1>Mu Online</h1>
                            <p>Está inspirado en la leyenda del continente Mu y en el libro del escritor británico James Churchward "The Lost Continent of Mu"
                                el objetivo es alcanzar el mayor nivel posible con un personaje creado y formado por el jugador. En particular, Mu es reconocido por
                                su gran cantidad de aficionados.También en el juego hay un gran uso del lenguaje chat, abreviaciones o de acrónimos, utilizados generalmente
                                para denominar contenido del juego como: razas, modos de juego, lugares en el mundo, etc. En Mu online el objetivo es alcanzar el máximo nivel
                                el cual es 400, pero después del nivel 400 se puede subir el (Master Level) a 1200, dando un total de nivel 1600 En la mayoría de los servidores
                                privados se implementa la opción de "reset" que implica la pérdida total de los niveles pero manteniendo el equipamiento, habilidades aprendidas y
                                los puntos estadísticos, pero al hacer eso los puntos de estatus van aumentando considerablemente a medida que un personaje logre hacer más reseteos del mismo.
                            </p>

                        </div>

                        <div className="descargar col-6  ">
                            <div className="card" >
                                <img src="/images/card_download.png" className="card-img-top" alt="..." />
                                <div className="card-body">


                                    <Link to={"https://github.com/francaparroz21/muclient"}> <button className="btn btn-primary">
                                        Descargar
                                    </button> </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Download;