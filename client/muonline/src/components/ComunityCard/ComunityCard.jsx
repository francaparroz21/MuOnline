import { Button } from "react-bootstrap";
import "./ComunityCard.css"

const ComunityCard = ({ props }) => {
    return (
        <div className="comunity-card-container">
            <div className="comunity-card-image-container">
                <img className="comunity-card-image" src={process.env.PUBLIC_URL + props.routeImage} alt={props.altImage} />
            </div>
            <h4 className="comunity-card-title">{props.title}</h4>
            <span className="comunity-card-username">{props.username}</span>
            <div className="comunity-card-button-container">
                <Button className="comunity-card-button" variant="outline-light">
                    <img className="comunity-card-go-image" src={process.env.PUBLIC_URL + "./images/go_icon.png"} alt="comunity-card-button" />
                </Button>
            </div>
        </div>
    )
}

export default ComunityCard;