
import './index.css';
import { BrowserRouter as Router, Route, Switch, NavLink, useHistory } from 'react-router-dom'

import 'bootstrap/dist/js/bootstrap.bundle.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavDropdown } from 'react-bootstrap';
import './css/Nav.css';

// import {Navbar,NavDropdown,Container} from 'react-bootstrap';

export default function Nav() {
    const history = useHistory();
    function logout(e) {
        e.preventDefault();
        localStorage.removeItem("user-info");
        history.push("/login");
    }
    return (<>
        <div className="header-container px-md-5">
            <div class="navbar-nav nav">
                <input type="checkbox" id="nav-check" />
                <div class="nav-header">
                    <div class="nav-title">
                        <NavLink className="navbar-brand fw-bold" to="/">Technotaught</NavLink>
                    </div>
                </div>
                <div class="nav-btn">
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div class="nav-links my-md-auto">
                    <span class="">
                        <NavLink extract className="navlink active linkcolor" aria-current="page" to="/">Home</NavLink>
                    </span>
                    <span class="">
                        <NavLink extract className="navlink linkcolor" to="/service">Blog</NavLink>
                    </span>
                    {/* <span class="">
                        <NavLink extract className="navlink linkcolor" to="/about">About</NavLink>
                    </span> */}
                    {
                        localStorage.getItem('user-info') ? <>

                            <span className="">
                                <NavLink extract className="navlink linkcolor" to="/dashboard">All Post</NavLink>
                            </span>
                            <span className="">
                                <NavLink className="navlink linkcolor" onClick={logout} to="#" >Logout</NavLink>
                            </span>
                        </>
                            : <>
                                <span className="">
                                    <NavLink extract className="navlink linkcolor" to="/login">Login</NavLink>
                                </span>
                                <span className="">
                                    <NavLink extract className="navlink linkcolor" to="/register">Register</NavLink>
                                </span>
                            </>
                    }
                </div>
            </div>
        </div>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="#">Navbar</a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">

            </div>
        </nav> */}

        {/* <div className="container">
            <div className="row gx-5"> */}
        {/* <div className=" "> */}

        {/* <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <NavLink className="navbar-brand fw-bold" to="/">Ashish</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav  mb-2 mb-lg-0" style={{ marginLeft: 'auto' }}>
                                    <li className="nav-item">
                                        <NavLink extract className="nav-link active linkcolor" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink extract className="nav-link linkcolor" to="/service">Blog</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink extract className="nav-link linkcolor" to="/NavLinkbout">About</NavLink>
                                    </li>
                                    {
                                        localStorage.getItem('user-info') ? <>
                                            
                                            <li className="nav-item">
                                                <NavLink extract className="nav-link linkcolor" to="/dashboard">All Post</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink  className="nav-link linkcolor" onClick={logout} to="#" >Logout</NavLink>
                                            </li>
                                        </>
                                            : <>
                                                <li className="nav-item">
                                                    <NavLink extract className="nav-link linkcolor" to="/login">Login</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink extract className="nav-link linkcolor" to="/register">Register</NavLink>
                                                </li>
                                            </>
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav> */}
        {/* </div> */}
        {/* </div>
        </div> */}



    </>);
}