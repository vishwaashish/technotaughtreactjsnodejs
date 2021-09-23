import { useEffect, useState } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import Updatenewpost from "./Updatenewpost";
// import axios from 'axios';
import axios from "axios";


import dateFormat from 'dateformat';
import { NavLink } from "react-router-dom";

export default function Singlepostview(props) {
    const [getid, setGetid] = useState([]);
    const [tagdata, setTagdata] = useState("");
    const [tag, setTag] = useState();


    const getvalue = () => {

        const id = props.postid;
        if (props.postid != undefined) {
            const headers = { 'Content-Type': 'application/json' }
            let url = "/showfiles/" + id;
            axios.get(url, headers)
                .then(response => {
                    console.log(response.data);
                    setGetid(response.data);
                    setTagdata(JSON.parse(response.data[0]['tag']))
                }).catch(error => {
                    console.error("Error==", error);
                })
        }
    }
    console.log(tagdata)

    useEffect(() => {
        getvalue();

    }, [])
    

    return (<div>

        {
            getid !== null ?

                <div>

                    {getid.map((item, i) =>
                        <article key={i} >

                            {/* <!-- Post header--> */}
                            <header className="mb-4">
                                {/* <!-- Post title--> */}
                                <h1 className="fw-bolder mb-1 text-break">{item.title}</h1>
                                {/* <!-- Post meta content--> */}
                                <div className="text-muted fst-italic mb-2">Posted on {dateFormat(item.uploaded_on, "dddd, mmmm dS, yyyy")} by {item.account}  </div>
                                {/* <!-- Post categories--> */}
                            
                            </header>
                            
                            <div class="mb-3">
                                    {JSON.parse(item.tag).map((item, i) =>
                                        <a key={i} className="badge bg-secondary mx-1 text-capitalize text-decoration-none link-light" style={{ display: "inline" }} href={"/service/search/" + item.value}>{item.label}</a>
                                    )}
                                </div>
                            {/* <!-- Preview image figure--> */}
                            {/* <figure className="mb-4"><img className="img-fluid rounded" src={"http://127.0.0.1:8000/" + getid.file_name} width="900" height="300" alt="..." /></figure> */}

                            <figure className="mb-4"><img className="img-fluid rounded" src={"http://localhost:3001/" + item.file_name} width="900" height="300" alt="..." /></figure>
                            {/* <!-- Post content--> */}
                            <section className="mb-5 text-break">
                                {ReactHtmlParser(item.description)}
                            </section>

                            <div className="text-left mb-3">Share :- 
                                <a href={"http://www.facebook.com/sharer.php?s=100&amp;p[title]=" + item?.title + "&amp;p[url]=" + "http://localhost:3000/postview/" + item.id} title="Share on Facebook" target="_blank" ><i class="fa fa-facebook"></i></a>
                                <a href={"http://twitter.com/share?text=" + item?.title + "&url=" + "http://localhost:3000/postview/" + item.id} target="_blank" title="Tweet" ><i class="fa fa-twitter"></i></a>
                                <a href={"http://www.linkedin.com/shareArticle?mini=true&url=http://localhost:3000/postview/" + item.id + "&title=" + item?.title + "&source=http://localhost:3000/postview/" + item.id} target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i></a>
                                <a href={"https://wa.me/?text=http://localhost:3000/postview/" + item.id} target="_blank" title="Share on Whatsapp" ><i class="fa fa-whatsapp"></i></a>
                                <a href={"mailto:?subject=" + item?.title + "&amp;body=http://localhost:3000/postview/" + item.id} target="_blank" title="Share on Email"><i class="fa fa-envelope"></i></a>
                            </div>
                        </article>
                    )}


                    { /*<! -- <section className="mb-5">
                        <div className="card bg-light">
                            <div className="card-body">
                                <form className="mb-4"><textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                                
                                <div className="d-flex mb-4">
                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div className="ms-3">
                                        <div className="fw-bold">Commenter Name</div>
                                        If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                       
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div className="ms-3">
                                                <div className="fw-bold">Commenter Name</div>
                                                And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                            </div>
                                        </div>
                                        <div className="d-flex mt-4">
                                            <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                            <div className="ms-3">
                                                <div className="fw-bold">Commenter Name</div>
                                                When you put money directly to a problem, it makes a good headline.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div className="ms-3">
                                        <div className="fw-bold">Commenter Name</div>
                                        When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    --> */}
                </div>

                : <h1>Not Found</h1>
        }

    </div>);
}