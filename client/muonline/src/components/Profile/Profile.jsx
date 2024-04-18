import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Profile.css"
import LogIn from '../LogIn/LogIn';
import axios from 'axios';

const Profile = ({ info }) => {

    const getCharacters = async () => await axios.get("http://localhost:3000/api/accounts/characters/" + info.memb___id).then(res => res.data)

    return (
        <>
            {
                !info.memb___info && !info.memb__pwd ?
                    <LogIn />

                    :
                    <div className='profile-container'>
                        <Card className='container' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="../../../images/dev5.png" />
                            <Card.Body>
                                <Card.Title>User: {info.memb___id}</Card.Title>
                                <Card.Text>
                                    Password: {"****"}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Id: {info.sno__numb}</ListGroup.Item>
                                <ListGroup.Item>Name: {info.memb_name}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <ListGroup.Item>Personajes: </ListGroup.Item>

                                <Card.Link href="#">{asd}</Card.Link>

                            </Card.Body>
                        </Card>

                    </div>
            }

        </>
    )
}


export default Profile;