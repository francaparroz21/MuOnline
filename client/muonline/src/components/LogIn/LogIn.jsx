import { Button } from "react-bootstrap";
import "./LogIn.css"
import axios from "axios";

const LogIn = () => {



    const validationLogin = async () => {

        const user = document.getElementById("userId")
        const passId = document.getElementById("passId")

        const obj = {
            "user": user,
            "pass": passId
        }

        const form = document.getElementById('form-login');


        form.addEventListener("submit", e => {
            e.preventDefault()
            const data = new FormData(form);
            const obj = {};
            data.forEach((value, key) => obj[key] = value);



            try {
                const result = fetch('http://localhost:3000/api/accounts', {
                    mode: "no-cors",
                    method: "get"
                }).then(res=>console.log(res))
            }
            catch (err) { console.log(err) }





        })
    }



    //     form.addEventListener('submit', e => {
    //         e.preventDefault();
    //         const data = new FormData(form);
    //         const obj = {};
    //         data.forEach((value, key) => obj[key] = value);
    //         fetch('http://localhost:3000/api/accounts', {
    //             method: 'GET',
    //             body: JSON.stringify(obj),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         }).then(result =>
    //             console.log(result)
    //          }
    //  })



    return (
        <>

            <div className='form-login-container container-fluid'>
                <div className="fondo-tras">
                    <h2 className='login-title'>Entrar</h2>

                    <div className="login-form-container">
                        <form id="form-login" className='login-form container' action="">
                            <div className="login-form-left">
                                <div className="login-input-container">
                                    <input id="userId" className="login-inputs" type="text" placeholder="Username" />

                                </div>
                                <div className="login-input-container">
                                    <input id="passId" className="login-inputs" type="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className='login-form-right login-button-container'>
                                <Button onClick={validationLogin} className='login-button-submit' variant="outline-success" type="submit">
                                    Entrar
                                </Button>
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