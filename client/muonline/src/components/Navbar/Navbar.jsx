import { NavLink } from "react-router-dom";
import "./Navbar.css"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faCircleInfo, faCartShopping, faUser,faStar } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md">
                <div className="navbar-left">
                    <NavLink to={"./"}>
                        <img className="logo-cocomu-logo" src={process.env.PUBLIC_URL + "/images/logo-cocomu.png"} alt="logo" />
                    </NavLink>

                </div>
                <div className="navbar-right">
                    <NavLink to={"./ranking"}>
                        <FontAwesomeIcon className="fa-component" icon={faStar} />
                    </NavLink>
                    <NavLink to={"./shop"}><FontAwesomeIcon className="fa-component" icon={faCartShopping} /></NavLink>
                    <NavLink className="nav-item download-logo" to={"./download"}> <FontAwesomeIcon className="fa-component" icon={faDownload} /> </NavLink>
                    <NavLink className="nav-item info-logo" to={"./info"}> <FontAwesomeIcon className="fa-component" icon={faCircleInfo} /> </NavLink>

                    <div className="signup-login">

                        <NavLink to={"./signup"}>
                            <Button className="signup-login-btn" variant="dark">Registrar <img className="signup-icon" alt="signup-icon" src={process.env.PUBLIC_URL + "/images/signup.png"} /></Button>

                        </NavLink>
                        <NavLink to={"./login"}>
                            <Button className="signup-login-btn" variant="dark">Ingresar<img className="login-icon" alt="login-icon" src={process.env.PUBLIC_URL + "/images/login.png"} /></Button>
                        </NavLink>
                    </div>
                    <NavLink className={"navlink-profile"} to={"./profile"}>
                        <FontAwesomeIcon className="fa-component fa-person" icon={faUser} />

                    </NavLink>

                </div>
            </nav>
        </header>
    )
}

export default Navbar;