import React from "react";
import { Button } from "react-bootstrap";
import "./LogIn.css"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {

    const validationLogin = async () => {

        const user = document.getElementById("userId")
        const pass = document.getElementById("passId")

        const form = document.getElementById('form-login');


        form.addEventListener("submit", e => {
            e.preventDefault()
            const data = new FormData(form);
            const obj = {};
            data.forEach((value, key) => obj[key] = value);



            axios.get("http://localhost:3000/api/accounts").then(res => {
                const finded = res.data.find(element => element.memb___id === user.value && element.memb__pwd === pass.value)
                if (finded) {
                    toast.success("Inicio de sesion exitoso!")
                } else {
                    document.getElementById("pwd-incorrect").innerHTML = `<p id="pwd-incorrect-text">Usuario o contraseña incorrectos.</p>`
                    toast.error("Fallo el inicio de sesion!")                }
            })





        })
    }


    return (
        <>

            <div className='form-login-container container-fluid'>
                <div className="fondo-tras">
                    <h2 className='login-title'>Entrar</h2>

                    <div className="login-form-container">
                        <form id="form-login" className='login-form container' action="">
                            <div className="login-form-left">
                                <div className="login-input-container">
                                    <input id="userId" name="user" className="login-inputs" type="text" placeholder="Username" />

                                </div>
                                <div className="login-input-container">
                                    <input id="passId" name="pass" className="login-inputs" type="password" placeholder="Password" />
                                </div>
                            </div>
                            <div id="pwd-incorrect"></div>
                            <div className='login-form-right login-button-container'>
                                <Button onClick={validationLogin} className='login-button-submit' variant="outline-success" type="submit">
                                    Entrar
                                </Button>
                                <ToastContainer position="top-right"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <script src={process.env.PUBLIC_URL + "/js/login.js"}></script>
        </>



    )
}

export default LogIn;