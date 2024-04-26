import Table from 'react-bootstrap/Table';
import "./Ranking.css"
import axios from 'axios';
import React from 'react';

const Ranking = () => {
    const [characters, setCharacters] = React.useState([])

    React.useEffect(() => {
        axios.get("http://localhost:3000/api/accounts/characters/").then((response) => {
            console.log(response.data)
            setCharacters(response.data);
        });
    }, []);


    return (
        <div className='container-fluid container-ranking'>
            <div className="fondo-tras">

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Reset</th>
                            <th>Level</th>
                            <th>PK</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            characters.map((element,key) => {
                                return (<tr key={key}>
                                    <td>{key+1}</td>
                                    <td>{element.Name}</td>
                                    <td>{element.ResetCount}</td>
                                    <td>{element.cLevel}</td>
                                    <td>{element.PkCount}</td>
                                </tr>)
                            })}


                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Ranking;