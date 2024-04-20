import Button from 'react-bootstrap/Button';
import "./SignUp.css"

const SignUp = () => {


    return (
        <>
            <div className='body-signup'>

                <div className='form-signup-container container fondo-tras'>
                    <h2 className='signup-title'>Crear cuenta</h2>

                    <div className="signup-form-container">
                        <form id='registerForm' className='signup-form container' method='POST' action="http://localhost:3000/api/accounts">
                            <div className="signup-input-container">
                                <input className="signup-inputs" name='username' type="text" placeholder="Username" />

                            </div>
                            <div className="signup-input-container">
                                <input className="signup-inputs" name='name' type="text" placeholder="Name" />

                            </div>
                            <div className="signup-input-container">
                                <input className="signup-inputs" type="email" placeholder="Email" />

                            </div>
                            <div className="signup-input-container">
                                <input className="signup-inputs" name='password' type="password" placeholder="Password" />

                            </div>
                            <div className="signup-input-container">
                                <input className="signup-inputs" type="password" placeholder="Repeat password" />

                            </div>
                            <div className="signup-input-container">
                                <input className="signup-inputs" name='code' type="number" placeholder="ID CODE (8 characters)" />

                            </div>
                            <div className='signup-button-container'>
                                <Button className='signup-button-submit' variant="outline-primary" type="submit">
                                    Registrar cuenta
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SignUp;