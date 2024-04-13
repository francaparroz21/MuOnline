import "./Shop.css"

const Shop = () => {
    return (
        <>
            <div className="container-fluid text-center container-vip">

                <div className="card mb-3 card-vip" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="/images/buyvip.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">VIP MU LATAM</h5>
                                <p className="card-text">Te ofrecemos el pase vip donde podras incrimetar tu farmeo de experiencia gracias al boost que te ofrece este pase</p>
                                <p className="card-text"><small className="text-body-secondary">El costo de nuestro VIP es: $3000</small></p>
                                <button className="btn btn-outline-success">Pase Vip</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row segundo-row">
                    <div className="card card-product">
                        <img src="/images/card_download.png" class="card-img-top" alt="vip-image" />
                        <div className="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-outline-success">Pase Vip</button>
                        </div>
                    </div>
                    <div className="card card-product">
                        <img src="/images/card_download.png" class="card-img-top" alt="vip-image" />
                        <div className="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-outline-success">Comprar</button>
                        </div>
                    </div>
                    <div className="card card-product">
                        <img src="/images/card_download.png" class="card-img-top" alt="vip-image" />
                        <div className="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-outline-success">Comprar</button>
                        </div>
                    </div>
                    <div className="card card-product">
                        <img src="/images/card_download.png" class="card-img-top" alt="vip-image" />
                        <div className="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-outline-success">Comprar</button>
                        </div>
                    </div>
                    <div className="card card-product">
                        <img src="/images/card_download.png" class="card-img-top" alt="vip-image" />
                        <div className="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-outline-success">Comprar</button>
                        </div>
                    </div>
                    <div className="card card-product">
                        <img src="/images/card_download.png" class="card-img-top" alt="vip-image" />
                        <div className="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-outline-success">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop;