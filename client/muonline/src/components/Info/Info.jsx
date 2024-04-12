import "./Info.css"

const Info = () => {




    return (
        <>
            <div className="container-fluid text-center container-info">
                <div className="fondo-tras">
                    <div className="row">
                        <div className="titulo-info col-12 col-sm-12 ">
                            <h1>Informacion de nuestro servidor</h1>
                        </div>

                    </div>
                    <div className="row second-row">
                        <div className="descripcion col-6 col-sm-6">
                            <h2>Nosotros</h2>
                            
                            <p>Somos un servidor argentino que te brinda elespacio  para disfrutar el juego como jamas lo hallas jugado</p>
                        </div>
                        <div className="video col-6">
                            <img src={process.env.PUBLIC_URL + "/images/card_ranking.png"} alt="" />
                        </div>
                    </div>
                    <div className="row tercera-row">
                        <div className="descripcion col-6 col-sm-6">
                            <h2>Nosotros</h2>
                            <p>Somos un servidor argentino que te brinda elespacio para disfrutar el juego como jamas lo hallas jugado</p>
                        </div>
                        <div className="descripcion col-6 col-sm-6">
                            <h2>Nosotros</h2>
                            <p>Somos un servidor argentino que te brinda elespacio para disfrutar el juego como jamas lo hallas jugado</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Info;