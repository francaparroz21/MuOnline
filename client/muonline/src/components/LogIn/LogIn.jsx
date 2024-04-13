import { Button } from "react-bootstrap";
import "./LogIn.css"

const LogIn = () => {
    return (
        
        <div className='form-login-container container-fluid'>
            <div className="fondo-tras">
                <h2 className='login-title'>Entrar</h2>

                <div className="login-form-container">
                    <form className='login-form container' action="">
                        <div className="login-form-left">
                            <div className="login-input-container">
                                <input className="login-inputs" type="text" placeholder="Username" />

                            </div>
                            <div className="login-input-container">
                                <input className="login-inputs" type="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className='login-form-right login-button-container'>
                            <Button className='login-button-submit' variant="outline-success" type="submit">
                                Entrar
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn;