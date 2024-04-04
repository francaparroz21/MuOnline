import "./HomeCard.css"
import { Card } from "react-bootstrap";

const HomeCard = ({ props }) => {
    return (
        <a className="home-card-a" href={props.route}>
            <Card className="home-card">
                <Card.Img src={props.routeImage} />
            </Card>
        </a>
    )
}

export default HomeCard;