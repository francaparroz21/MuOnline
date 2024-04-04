import Carousel from 'react-bootstrap/Carousel';
import "./CarouselImages.css"

const CarouselImages = () => {
    return (
        <Carousel className='carousel-images'>
            <Carousel.Item className="carousel-images-item">
                <img className='banner-image' src={process.env.PUBLIC_URL + "/images/banner_example.jpg"} alt="banner" />
            </Carousel.Item>
            <Carousel.Item className="carousel-images-item">
                <img className='banner-image' src={process.env.PUBLIC_URL + "/images/banner_example.jpg"} alt="banner" />
            </Carousel.Item>
            <Carousel.Item className="carousel-images-item">
                <img className='banner-image' src={process.env.PUBLIC_URL + "/images/banner_example.jpg"} alt="banner" />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselImages;