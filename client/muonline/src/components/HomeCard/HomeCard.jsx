import { Link } from "react-router-dom";
import "./HomeCard.css"
import { Card } from "react-bootstrap";

const HomeCard = ({ props }) => {
    return (
        <Link to={props.route}>
            <Card className="home-card">
                <Card.Img src={props.routeImage} />
            </Card>
        </Link>
    )
}

export default HomeCard;