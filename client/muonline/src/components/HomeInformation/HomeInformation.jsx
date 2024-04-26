import Button from 'react-bootstrap/Button';
import "./HomeInformation.css"
import { Link } from 'react-router-dom';

const HomeInformation = () => {
    return (
        <div className="home-information">
            <div className="title-home-information">
                <div className="title-home-information-left">
                    <img className="logo-cocomu-home-information" src={process.env.PUBLIC_URL + "/images/logo-cocomu.png"} alt="logo-cocomu" />
                </div>
                <div className="title-home-information-right">
                    <h2 className="title-cocomu-server">Coco MU server</h2>
                    <div className="title-home-information-right-p">
                        <p>Users online: <span className="users-online">10</span> </p>
                        <p>Conexiones hoy: <span className="conections-today">100</span></p>
                    </div>
                </div>
            </div>
            <div className="home-information-server">
                <h2 className="home-information-server-title">Información del servidor</h2>
                <div className="home-information-server-list">
                    <ul className="home-information-server-list-items">
                        <li className="home-information-server-list-item">
                            <div className="home-information-server-list-item-right">
                                <h3 className="home-information-server-list-item-title">
                                    Version: 0.99B original
                                </h3>
                                <span>
                                    Files Premium libres de bugs
                                </span>
                            </div>
                        </li>
                        <li className="home-information-server-list-item">
                            <div className="home-information-server-list-item-right">
                                <h3 className="home-information-server-list-item-title">
                                    Experiencia: 700x
                                </h3>
                                <span>
                                    Reset level: 350 & 0 puntos por cada reset.
                                </span>
                            </div>
                        </li>
                        <li className="home-information-server-list-item">

                            <div className="home-information-server-list-item-right">
                                <h3 className="home-information-server-list-item-title">
                                    Server Drop: 70%
                                </h3>
                                <span>
                                    El maximo de stats es en 32767 Puntos
                                </span>
                            </div>
                        </li>
                        <li className="home-information-server-list-item">

                            <div className="home-information-server-list-item-right">
                                <h3 className="home-information-server-list-item-title">
                                    Master reset
                                </h3>
                                <span>
                                    Obtienes 0 puntos por cada MR
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='home-information-more-info-button'>
                <Link to="./info">
                    <Button className='more-information-button' variant='outline-info'><span className='more-information-button-text'>Más información</span></Button>
                </Link>
            </div>
        </div>
    )
}

export default HomeInformation;