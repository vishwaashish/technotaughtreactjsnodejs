
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Nav from './Nav';
import { NavLink, useHistory } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import axios from "axios";
import { Alert } from 'react-bootstrap';
import Navigation from './Components/All/navigation';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [error, setError] = useState('');

    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/home")
        }
        
    }, [])

    async function Registeruser(e) {
    
        e.preventDefault();
        let item = { name, email, password }
        // let headers = { 'Content-Type': 'application/json' }
        axios.post('http://localhost:3001/users/register/', item)
            .then(response => {
                console.log(response);
                if(response.data.status === 200){
                setError({ status: "success", message: "Register Successfully go and Login" });
                setTimeout(()=>{setError('')},5000);
                }else if(response.data.status === 403 ){
                setError({ status: "danger", message: "Email is already there" });
                setTimeout(()=>{setError('')},3000);
                }
            }).catch(error => {
                console.error("Error", error);
            })

        // let result = await fetch('http://127.0.0.1:8000/api/auth/signup',{
        //     method:'POST',
        //     headers:{
        //         "Content-Type":"application/json",
        //         "Accept":"application/json"
        //     },
        //     body:JSON.stringify(item)
        // });
        // result = await result.json();
        // // console.warn("result",result);
        // localStorage.setItem('user-info',JSON.stringify(result));
        // history.push("/home")
        // console.log(item)
    
    }

    return (<React.Fragment>
        <Nav />
        <Navigation navigation="Register"/>

        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-2 mx-auto">
            <div className="card border-0">
                <div className="row d-flex">
                    <div className="col-lg-6 m-auto">
                        <div className="card1 pb-5 text-center ">
                            {/* <div className="row"> <img src="https://i.imgur.com/CXQmsmF.png" className="logo" /> </div> */}
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" className="image" /> </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-5">
                            
                            <div className="row px-3 mb-4">
                                <div className="line"></div> <small className="or text-center">O</small>
                                <div className="line"></div>
                            </div>

                            { error != '' ? (<Alert variant={error.status} >{error.message}</Alert>) : null }
                            {/* { Object.keys(error).length !={} && <Alert variant={error.status} >{error.message}</Alert>} */}
                            <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Name</h6>
                            </label> <input className="mb-4" type="text" name="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Email Address</h6>
                            </label> <input className="mb-4" type="email" name="email" placeholder="Enter a valid email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Password</h6>
                            </label> <input className="mb-4" type="password" name="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="row px-3"> <label className="mb-1">
                                <h6 className="mb-0 text-sm">Confirm Password</h6>
                            </label> <input type="password" name="password_confirmation" placeholder="Reenter password" value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} />
                            </div>
                            <div className="row px-3 mb-4">
                                {/* <div className="custom-control custom-checkbox custom-control-inline"> <input id="$ npm install axioschk1" type="checkbox" name="chk" className="custom-control-input" /> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a> */}
                            </div>
                            <div className="row mb-3 px-3"> <button onClick={(e) => {
                                if ( name == '' ||  email == '' ||  password == '' ||  password_confirmation == ''){
                                    setError({ status: "danger", message: "Fill the fields!" });
                                    setTimeout(()=>{setError('')},3000);
                                
                                }else if ( name.length < 6  || email.length < 6  || password.length < 6 || password_confirmation.length < 6 ){
                                    setError({ status: "danger", message: "Value should be Greater than 6!" });
                                    setTimeout(()=>{setError('')},3000);
                                
                                }
                                // else if ( email !== '') {          
                                //     var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                                //     if (!pattern.test(email)) {
                                //       setError({ status: "danger", message: "Please enter valid email address." });
                                //       setTimeout(()=>{setError('')},3000);
                                //     }
                                //   }
                                else if ( password != password_confirmation ) { 
                                    setError({ status: "danger", message: "Password and Confirm password is not match!" });
                                    setTimeout(()=>{setError('')},3000);
                                }
                                else {
                                    Registeruser(e)
                                }
                                
                            }} className="btn btn-blue text-center">Register</button> </div>

                            

                            <div className="row mb-4 px-3"> <small className="font-weight-bold">Already have an account? <NavLink exact className="text-danger" to="/login">Login</NavLink></small> </div>
                        </div>
                    </div>
                </div>

                {/* <div className="bg-blue py-4">
                    <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2"></small>
                        <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm"></span> <span className="fa fa-google-plus mr-4 text-sm"></span> <span className="fa fa-linkedin mr-4 text-sm"></span> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                    </div>
                </div> */}
            </div>
        </div>


    </React.Fragment >)

}