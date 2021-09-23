import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { axios } from "axios";
import { type } from "os";
import './Trends.css';

export default function Trends(props) {

    const [sitedata, setSitedata] = useState([])

    const [searchdata, setSearchdata] = useState("")
    const [loading, setLoading] = useState(false);
    const [pname, setPname] = useState("");
    const [token, setToken] = useState("");

    // console.log(props.search)

    useEffect(() => {

        setPname(JSON.parse(localStorage.getItem('user-info')));
        setToken(pname.token);
        showfile();

    }, [])


    let showfile = async () => {
        console.log("token= ", token);
        if (props.count) {
            setSearchdata('400');
            let url = "/showfiles/count/" + props.count;
            console.log(url);
            fetch(url, {
                // mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
            }).then((result) => {
                result.json().then((resp) => {
                    setSitedata(resp)
                })
            }) .catch((error) => {
                    console.error('Error:', error);
                    // setSearchdata("");
                });
            setLoading(true)
        }
        else {
            setSearchdata('200');
            let url = "/showfiles/";
            console.log(url);
            fetch(url).then((result) => {
                result.json().then((resp) => {
                    setSitedata(resp)
                })
            })
            setLoading(true)
        }
    }




    return (<>

        {loading ? (

            <div>
                {searchdata != 404 || searchdata == 200 ? (
                    <div class="row icon-boxes">

                        {sitedata.map((item, i) =>
                            <div key={i} class="col-md-6 col-lg-3 col-sm-4 d-flex align-items-stretch my-4 mb-lg-0 hover" >
                                <div class="" style={stringifycss.iconBox} >
                                    <div class=""><img src={"/" + item.file_name} className="card-img-top" alt="..." style={{ height: '13rem' }} /></div>
                                    <div className="text-center social-box">
                                        <a href={"http://www.facebook.com/sharer.php?s=100&amp;p[title]=" + item?.title + "&amp;p[url]=" + "http://localhost:3000/postview/" + item.id} title="Share on Facebook" target="_blank" ><i class="fa fa-facebook"></i></a>
                                        <a href={"http://twitter.com/share?text=" + item?.title + "&url=" + "http://localhost:3000/postview/" + item.id} target="_blank" title="Tweet" ><i class="fa fa-twitter"></i></a>
                                        <a href={"http://www.linkedin.com/shareArticle?mini=true&url=http://localhost:3000/postview/" + item.id + "&title=" + item?.title + "&source=http://localhost:3000/postview/" + item.id} target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i></a>
                                        <a href={"https://wa.me/?text=http://localhost:3000/postview/" + item.id} target="_blank" title="Share on Whatsapp" ><i class="fa fa-whatsapp"></i></a>
                                        <a href={"mailto:?subject=" + item?.title + "&amp;body=http://localhost:3000/postview/" + item.id} target="_blank" title="Share on Email"><i class="fa fa-envelope"></i></a>
                                    </div>
                                    <h6 class="fw-bold mt-2"><NavLink to={"/postview/" + item.id} className="text-decoration-none">{item.title.substring(0, 70) + "..."}</NavLink></h6>
                                    <p class="">{item.description.substring(3, 70) + "..."}</p>
                                    <div className="text-left button-effect"><NavLink to={"/postview/" + item.id} className="text-decoration-none effect effect-1" postid='' >Read More <span className="slide-right">-&gt;</span></NavLink></div>

                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className=" row text-center">
                        <h2 className="">Not Found</h2>
                    </div>
                )
                }
            </div>
        ) : (

            <div class="d-flex justify-content-center">
                <div class="spinner-border m-5" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )}

    </>);

}

const stringifycss = {
    iconBox: {
        padding: "5% 5%",
        position: "relative",
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 0 29px 0 rgb(18 66 101 / 8%)",
        transition: "all 0.3s ease-in-out",
        borderRadius: "8px",
        zIndex: "1",

        "&:hover": {
            transform: "scale(1.08)",
        },
    },

}
