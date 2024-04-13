import "./Home.css"
import Carousel from "../CarouselImages/CarouselImages";
import HomeInformation from "../HomeInformation/HomeInformation";
import Events from "../Events/Events";
import HomeCardList from "../HomeCardList/HomeCardList";

const Home = () => {
    return (

        <div className="container-fluid container-home">
            <div className="fondo-tras">
                <div className="row home-row">
                    <div className="col-8 carousel-home">
                        <Carousel className="carousel-images" />
                    </div>
                    <div className="col-4 second-col">
                        <HomeInformation />
                    </div>
                </div>

                <div className="row second-row">
                    <div className="col-8">
                        <HomeCardList />
                    </div>
                    <div className="col-4 second-col">
                        <Events />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;