import Button from 'react-bootstrap/Button';
import "./SignUp.css"

const SignUp = () => {
    return (
        <div className='form-signup-container container'>
            <h2 className='signup-title'>Crear cuenta</h2>

            <div className="signup-form-container">
                <form className='signup-form container' action="">
                    <div className="signup-input-container">
                        <input className="signup-inputs" type="text" placeholder="Username" />

                    </div>
                    <div className="signup-input-container">
                        <input className="signup-inputs" type="email" placeholder="Email" />

                    </div>
                    <div className="signup-input-container">
                        <input className="signup-inputs" type="password" placeholder="Password" />

                    </div>
                    <div className="signup-input-container">
                        <input className="signup-inputs" type="password" placeholder="Repeat password" />

                    </div>
                    <div className="signup-input-container">
                        <input className="signup-inputs" type="number" placeholder="ID CODE (8 characters)" />

                    </div>
                    <div className='signup-button-container'>
                        <Button className='signup-button-submit' variant="outline-primary" type="submit">
                            Registrar cuenta
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;