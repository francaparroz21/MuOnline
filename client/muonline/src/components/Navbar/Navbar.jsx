import { NavLink } from "react-bootstrap";
import "./Navbar.css"
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md">
                <div className="navbar-left">
                    <a className="nav-logo" href="./"> <img className="logo-cocomu-logo" src={process.env.PUBLIC_URL + "/images/logo-cocomu.png"} alt="logo" /></a>
                </div>
                <div className="navbar-right">
                    <NavLink className="nav-item" to={"./download"}><img className="download-logo" src={process.env.PUBLIC_URL + "/images/download.png"} alt="download-logo" /></NavLink>
                    <NavLink className="nav-item" to={"./download"}><img className="info-logo" src={process.env.PUBLIC_URL + "/images/informacion.png"} alt="informacion-logo" /></NavLink>
                    <NavLink className="nav-item" to={"./download"}><img className="ranking-logo" src={process.env.PUBLIC_URL + "/images/ranking.png"} alt="ranking-logo" /></NavLink>
                    <Button href="./signup" variant="dark">Registrar <img className="signup-icon" alt="signup-icon" src={process.env.PUBLIC_URL + "/images/signup.png"} /></Button>
                    <Button href="./login" variant="dark">Ingresar<img className="login-icon" alt="login-icon" src={process.env.PUBLIC_URL + "/images/login.png"} /></Button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;