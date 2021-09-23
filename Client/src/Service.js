
import Navigation from './Components/All/navigation'
import Nav from './Nav'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import Trends from "./Components/Trends/Trends";
import { options } from './Components/Post/data';
export default function Home() {

  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const id = useParams()
  useEffect(() => {
    if (id.string == '' || id.string == undefined) {
      searching("")
    } else {
      searching(id.string)
    }
  }, [])


  const searching = async (text) => {
    fetch('/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ search: text }),
    }).then((result) => {
      result.json().then((resp) => {
        if (resp[0].status === 404) {
          setdata(404)
        } else {
          setdata(resp);
        }
      })
    }).catch((error) => {
        console.error('Error:', error);
      });
      setLoading(true)
  }


  return (<>
    <Nav />
    <Navigation navigation="All Post" />
  
    <div className="py-md-5 py-3 bg-light">
      <div className="container px-md-5">
        <div className="pb-md-3 p-0 d-flex justify-content-center" >
          <div className="row">
            <input
              type="text"
              className="form-control "
              id="inlineFormInput"
              placeholder="Search..."
              defaultValue={id.string}
              onChange={(e) => {
                (searching(e.target.value))
              }}
            />
          </div>
        </div>
        
        <div class="pb-3 text-md-center">
            {options.map((item, i) =>
              <a key={i} className="badge bg-secondary m-1 text-decoration-none link-light" style={{  }} href={"/service/search/" + item.value}><span className="">{item.label}</span></a>
            )}
          </div>
        <div className="row icon-boxes">
          {loading == true ? (
            data != 404 ? (
              data.map((item, i) =>
                <div key={i} className="col-md-6 col-lg-3 col-sm-4 d-flex align-items-stretch my-3 hover" >
                  <div className="" style={stylingObject.iconBox} >
                    <div className=""><img src={"/" + item?.file_name} className="card-img-top" alt="..." style={stylingObject.image} /></div>
                    <div className="text-center social-box">
                      <a href={"http://www.facebook.com/sharer.php?s=100&amp;p[title]=" + item?.title + "&amp;p[url]=" + "http://localhost:3000/postview/" + item.id} title="Share on Facebook" target="_blank" ><i class="fa fa-facebook"></i></a>
                      <a href={"http://twitter.com/share?text=" + item?.title + "&url=" + "http://localhost:3000/postview/" + item.id} target="_blank" title="Tweet" ><i class="fa fa-twitter"></i></a>
                      <a href={"http://www.linkedin.com/shareArticle?mini=true&url=http://localhost:3000/postview/" + item.id + "&title=" + item?.title + "&source=http://localhost:3000/postview/" + item.id} target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin"></i></a>
                      <a href={"https://wa.me/?text=http://localhost:3000/postview/" + item.id} target="_blank" title="Share on Whatsapp" ><i class="fa fa-whatsapp"></i></a>
                      <a href={"mailto:?subject=" + item?.title + "&amp;body=http://localhost:3000/postview/" + item.id} target="_blank" title="Share on Email"><i class="fa fa-envelope"></i></a>
                    </div>
                    <h6 className="fw-bold mt-2"><NavLink to={"/postview/" + item.id} className="text-decoration-none">{item?.title.substring(0, 70) + "..."}</NavLink></h6>
                    <p className="">{item?.description.substring(3, 70) + "..."}</p>
                    <div className="text-left button-effect"><NavLink to={"/postview/" + item?.id} className="text-decoration-none effect effect-1" postid='' >Read More <span className="slide-right">-&gt;</span></NavLink></div>
                  </div>
                </div>
              )) : (
              <div>
                <div className="h1 text-center py-5">Not Found</div>
              
              <div className="container px-md-5 mb-5">
                    <div className="text-center h1 fw-bold mb-2">Related Post</div>
                    <Trends count={8} />
                </div>
                </div>
              )
          ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border m-5" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </>)
}



var stylingObject = {
  searchs: {
    display: "inline-block",
    justifyContent: "center",
    width: "50%",
  },
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
  image: {
    height: "12rem",
  }

}