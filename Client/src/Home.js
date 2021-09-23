import Nav from './Nav'
import CodingImg from './image/codingimg.png';
import servicesleft from './image/services-left-dec.png';
// import portfolioleft from './image/portfolio-left-dec.png';
// import contactdec from './image/contact-dec.png';
// import contactleft from './image/contact-left-dec.png';
import contactus from './image/contact-us-vector.png';
import Trends from "./Components/Trends/Trends";
// import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {

    // console.log('token', JSON.parse(localStorage.getItem('user-info')))
    // console.log('only token: ',JSON.parse(localStorage.getItem('user-info')).token )
    return (
        <div>
            <Nav />

            {/* <!-- Mashead header--> */}
            <header className="masthead" >
                <div className="container px-md-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-5" >
                            {/* <!-- Mashead text and app badges--> */}
                            <div className="mb-5 mb-lg-0 text-center text-lg-start">
                                <h1 className="display-4  mb-3 fw-bold">Welcome to <span className="text-header">TechnoTaught</span>.</h1>
                                <p className="lead fw-normal text-muted mb-3">It is a technology-related blog. The main motto of this website is to spread more and more knowledge related to technology.</p>
                                <button type="button" className="btn mybutton btn-outline-header bg-header rounded-pill">Get Started</button>
                            </div>
                        </div>
                        <div className="col-lg-7" >
                            {/* <!-- Masthead device mockup feature--> */}
                            <div className="masthead-device-mockup">
                                <div className="device-wrapper">
                                    <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                        <div className="screen bg-black">
                                            {/* <img src = "image/codingimg.png" /> */}
                                            <img src={CodingImg} width="100%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="masthead1 bg-light" style={{ backgroundImage: `url(${servicesleft})`, backgroundRepeat: 'no-repeat', backgroundPosition: '', }}>

                <div className="container px-md-5 mb-md-5">
                    <div className="text-center display-6 fw-bold mb-md-2">New Trend</div>
                    <h6 className="text-center mb-md-2 navlink"><NavLink extract className=" linkcolor" to="/service">View More</NavLink></h6>
                    <Trends count={4} />
                </div>
            </div>

            <div>
                <div className=" masthead1">
                    <div className="container px-md-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-7" >
                                {/* <!-- Mashead text and app badges--> */}
                                <div className="mb-5 mb-lg-0 text-center text-lg-start">
                                    <h1 className="display-4  mb-3 fw-bold">Get in Touch</h1>
                                    <p className="lead fw-normal text-muted mb-3">Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
                                    <div className="">
                                        <a className="linkcolor" href="mailto:vishwakarmaashish165@gmail.com"><i className="fa fa-envelope" style={{fontSize:"20px",padding:"10px 10px 10px 0"}}></i> vishwakarmaashish165@gmail.com</a><br/>
                                        <a className="linkcolor" href="tel:918424847449"><i className="fa fa-whatsapp" style={{fontSize:"20px",padding:"10px 10px 10px 0"}}></i> +91 8424847449</a><br/>
                                        <a className="linkcolor" href="https://github.com/vishwaashish"><i className="fa fa-github" style={{fontSize:"20px",padding:"10px 10px 10px 0"}}></i> vishwaashish</a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5" >
                                {/* <!-- Masthead device mockup feature--> */}
                                <div className="masthead-device-mockup">
                                    <div className="device-wrapper">
                                        <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                            <div className="screen bg-black">
                                                {/* <img src = "image/codingimg.png" /> */}
                                                <img src={contactus} width="100%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}


