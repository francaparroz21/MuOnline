import { NavLink } from "react-router-dom";
import "./Navbar.css"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload,faCircleInfo } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md">
                <div className="navbar-left">
                    <a className="nav-logo" href="./"> <img className="logo-cocomu-logo" src={process.env.PUBLIC_URL + "/images/logo-cocomu.png"} alt="logo" /></a>
                </div>
                <div className="navbar-right">
                    <NavLink className="nav-item download-logo" to={"./download"}> <FontAwesomeIcon className="fa-component" icon={faDownload} /> </NavLink>
                    <NavLink className="nav-item info-logo" to={"./info"}> <FontAwesomeIcon className="fa-component" icon={faCircleInfo} /> </NavLink>
                    <NavLink to={"./signup"}>
                        <Button variant="dark">Registrar <img className="signup-icon" alt="signup-icon" src={process.env.PUBLIC_URL + "/images/signup.png"} /></Button>

                    </NavLink>
                    <NavLink to={"./login"}>
                        <Button variant="dark">Ingresar<img className="login-icon" alt="login-icon" src={process.env.PUBLIC_URL + "/images/login.png"} /></Button>
                    </NavLink>

                </div>
            </nav>
        </header>
    )
}

export default Navbar;