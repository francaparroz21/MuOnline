import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Profile.css"

const Profile = ({ info, characters }) => {

    

    return (
        <>

            {
                !info.memb___id && !info.memb__pwd ?
                    window.location.replace("/login")
                    :


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
                            <div>
                                <Card.Link href="#">{characters.GameID1}</Card.Link>
                            </div>
                            <div>
                                <Card.Link href="#">{characters.GameID2}</Card.Link>
                            </div>
                            <div>
                                <Card.Link href="#">{characters.GameID3}</Card.Link>
                            </div>
                            <div>
                                <Card.Link href="#">{characters.GameID4}</Card.Link>
                            </div>
                            <div>
                                <Card.Link href="#">{characters.GameID5}</Card.Link>
                            </div>

                        </Card.Body>
                    </Card>
            }

        </>
    )
}


export default Profile;