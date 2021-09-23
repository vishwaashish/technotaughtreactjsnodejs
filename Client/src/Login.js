
import React from 'react';
import { useEffect, useState } from 'react';
import Nav from './Nav';
import { NavLink, useHistory } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import axios from 'axios';
import { Alert,Spinner } from 'react-bootstrap';
import Navigation from './Components/All/navigation';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function Login() {

    const [userdata, setUserdata] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('user-info')){
            history.push("/home")
        }
    }, [])

    async function getdata(e) {
        e.preventDefault();
        let item = { email, password }
        axios.post('http://127.0.0.1:3001/users/login', item)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 200) {

                    setError({ status: "success", message: "Login Successfully redirecting...", spinner:"border" });
                    setTimeout(() => {
                        localStorage.setItem('user-info', JSON.stringify(response.data));
                        // localStorage.setItem('token', JSON.stringify(response.data.token));
                        window.location.reload(false);
                        // history.push("/home")
                    }, 3000)
                } else if (response.data.status === 401) {
                    setError({ status: "danger", message: "Email and Password is incorrect" });
                    setTimeout(() => { setError('') }, 3000);
                }

            })
            .catch(err => console.err("Error", err))
    }

    return (<React.Fragment>
        <Nav />
        <Navigation navigation="Login"/>

        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-2 mx-auto">
            <div className="card  border-0">
                <div className="row d-flex">
                    <div className="col-lg-6 m-auto">
                        <div className="card1 pb-5 text-center">
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" className="image" /> </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-5">
                        
                            {/* <div className="row mb-4 px-3">
                                <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                <div className="facebook text-center mr-3">
                                    <div className="fa fa-facebook">F</div>
                                </div>
                                <div className="twitter text-center mr-3">
                                    <div className="fa fa-twitter">T
                                    </div>
                                </div>
                                <div className="linkedin text-center mr-3">
                                    <div className="fa fa-linkedin">L</div>
                                </div>
                            </div> */}
                            <div className="row px-3 mb-4">
                                <div className="line"></div> <small className="or text-center">O</small>
                                <div className="line"></div>
                            </div>

                            {error != '' ? (<Alert className="alert" variant={error.status} >{error.message} <Spinner animation={error.spinner} size="sm" /></Alert>) : null}
                            
                                <div className="row px-3"> <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Email Address</h6>
                                </label> <input className="mb-4" type="email" name="email" placeholder="Enter a valid email address" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="row px-3"> <label className="mb-1">
                                    <h6 className="mb-0 text-sm">Password</h6>
                                </label> <input type="password" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} /> </div>
                                <div className="row px-3 mb-4">
                                    {/* <div className="custom-control custom-checkbox custom-control-inline"> <input id="$ npm install axioschk1" type="checkbox" name="chk" className="custom-control-input" /> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a> */}
                                </div>
                                <div className="row mb-3 px-3"> <button 
                                onClick={ (e)=>{
                                    if( email == '' || password == '' ){
                                        setError({ status: "danger", message: "Fill all the fields" });
                                        setTimeout(()=>{setError('')},3000);
                                    }else{
                                    getdata(e);
                                    }
                                    }}
                                className="btn btn-blue text-center">Login</button> </div>
                            
                            <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account?
                                <NavLink extract className="text-danger" to="/register">Register</NavLink>
                            </small> </div>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-blue py-4">
                    <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                        <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm"></span> <span className="fa fa-google-plus mr-4 text-sm"></span> <span className="fa fa-linkedin mr-4 text-sm"></span> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                    </div>
                </div> */}
            </div>
        </div>
    </React.Fragment >)

}

