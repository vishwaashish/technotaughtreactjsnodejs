import Navigation from './Components/All/navigation'
import Nav from "./Nav";
import Listpost from "./Components/Post/Listpost";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
export default function Dashboard() {
    const [name,setname] = useState("");

    useEffect(()=>{
        setname(JSON.parse(localStorage.getItem('user-info')).name);
        console.log(name);
    },[])

    return (<div>

        <Nav />
        <span className="text-capitalize"><Navigation  navigation={"Hi "+name}

            nav={
                <ul className="nav justify-content-center" style={{height:"0px"}}>
                    <li className="nav-item">
                        <NavLink extract className="mr-3 navs-header" to="/addpost">Add Post</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink extract className="navs-header" to="/user">User</NavLink>
                    </li>
                </ul>
            }
        /></span>


        <div className="pt-md-5">
            <div className="container">
                <div className="row gx-5 align-items-center">
                    <div className="col ">
                        <h1 className="text-center m-3">All Post</h1>
                        <Listpost />
                    </div>
                    {/* <div className="col">
                    </div> */}
                </div>
            </div>
        </div>
    </div>);
}