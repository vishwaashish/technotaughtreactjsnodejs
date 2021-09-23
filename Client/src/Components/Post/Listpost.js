import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Route } from "react-router-dom";
export default function Listpost() {

  const [postJSON, setPostJSON] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pname, setPname] = useState("");
  const [token, setToken] = useState("");


  useEffect(() => {

    setPname(JSON.parse(localStorage.getItem('user-info')));
    console.log(pname)
    if (JSON.parse(localStorage.getItem('token')) === '' || JSON.parse(localStorage.getItem('token')) === undefined) {
      console.log("Token is not there!");
      setToken('None');
    } else {
      setToken(JSON.parse(localStorage.getItem('token')));
    }
    
    fetchimage()
  }, []);
  // console.log("token12", token);


  const fetchimage = async () => {
    
    const header = {
      'Content-Type': 'application/json'
      // ,'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
    }
    await axios.get('/showfiles/user/'+JSON.parse(localStorage.getItem('user-info')).email, {method : 'GET',header})
      .then(response => {
        console.log(response.data);
        setPostJSON(response.data);
      })
    setLoading(true);
  }

  const deleteImage = (productId) => {
    axios.get('/delete/' + productId)
      .then((result) => {
        alert("Delete successfully")
        fetchimage();
      })
      .catch(() => {
        alert('Error in the Code');
      });
  };

  return (<>


    {loading ? (

      postJSON != '' ?
      <div class="table-responsive-lg">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">View</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              postJSON.map((item, i) =>

                <tr key={i} className="m-auto">
                  <th scope="row">{i + 1}</th>
                  <th><img src={"http://127.0.0.1:3001/" + item.file_name} alt="..." width="50" height="50" />
                  </th>
                  <td><NavLink to={"/postview/" + item.id} className="text-decoration-none">{item.title}</NavLink></td>
                  <td><NavLink to={"/postview/" + item.id} className="text-decoration-none"><i class="fa fa-eye" aria-hidden="true"></i></NavLink></td>
                  <td><NavLink to={"/postedit/" + item.id} className="text-decoration-none"><i class="fa fa-edit" aria-hidden="true"></i></NavLink></td>
                  <td><NavLink to="#" onClick={() => deleteImage(item.id)} className="text-decoration-none" ><i class="fa fa-trash" aria-hidden="true"></i></NavLink></td>
                </tr>
              )
            }

          </tbody>

        </table>
        </div>

        : (<div class="text-center h4 masthead1 container">Post Not Found</div>)
    ) : (

      <div class="d-flex justify-content-center">
        <div class="spinner-border m-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )}
    <div class="p-md-5"></div>


  </>);
}