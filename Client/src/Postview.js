
import { NavLink, useParams } from "react-router-dom"
import Nav from './Nav';
import Singlepostview from "./Components/Post/Singlepostview";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { options } from './Components/Post/data';
import Trends from "./Components/Trends/Trends";
export default function Postview() {

    const { id } = useParams();
    const [searchinput, setsearchinput] = useState("");
    const [Postdata, setPostdata] = useState([]);

    useEffect(() => {
        fetchpost()
    }, [])

    const fetchpost = () => {
        const header = {
            'Content-Type': 'application/json'
        }
        axios.get('/showfiles/count/10', { method: 'GET', header })
            .then(response => {
                // console.log(response.data);
                setPostdata(response.data);
                // console.log("post", Postdata)
            })
    }




    const searchonclick = (e) => {
        if (searchinput !== '') {
            window.location.href = "/service/search/" + searchinput
        }
    }
    return (

        <div>
            <Nav />
            <div className="container mt-5 px-5">
                <div className="row">

                    <div className="col-lg-8" style={{overflowX:"scroll"}} >

                        <Singlepostview postid={id} />


                    </div>




                    <div div className="col-lg-4">

                        <div className="card mb-4">
                            <div className="card-header">Search</div>
                            <div className="card-body">
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Enter search term..." onChange={(e) => { setsearchinput(e.target.value) }} aria-label="Enter search term..." aria-describedby="button-search" />
                                    <button className="btn btn-primary" type="submit" id="button-search" onClick={(e) => {
                                        if (searchinput !== '') {
                                            searchonclick();
                                        }
                                    }} type="button">Go!</button>

                                </div>
                            </div>
                        </div>
                        {/* <!-- Categories widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Categories</div>
                            <div className="card-body">
                                
                                    {options.map((item, i) =>
                                        <a key={i} className="badge bg-secondary text-decoration-none link-light" style={{ display:"inline" }} href={"/service/search/" + item.value}>{item.label}</a>
                                    )}
                               
                            </div>
                        </div>
                        {/* <!-- Side widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Posts</div>

                            <div className="card-body">
                                {
                                    Postdata.map((item, i) =>
                                        <ul className="nav-link text-dark" key={i}>
                                            <li><a className="text-capitalize" href={"/postview/" + item.id}>{item.title}</a></li>
                                        </ul>
                                    )
                                }</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="masthead1 bg-light" >

                <div className="container px-md-5 mb-5">
                    <div className="text-center display-6 fw-bold mb-2">Related Post</div>
                    <Trends count={4} />
                </div>
            </div>


        </div >

    )

}