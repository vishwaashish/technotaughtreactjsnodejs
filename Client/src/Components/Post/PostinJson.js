
// import { useEffect,useState } from "react";
// import Listpost from "./Listpost";

// export default function PostinJson(){

//     const [postJSON, setPostJSON] = useState([]);
//     useEffect(()=>{

//         let data = localStorage.getItem('user-info');
//         let info = JSON.parse(data)
//         const header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + info.access_token }
//         fetch('http://127.0.0.1:8000/api/showfile/', {header})
//         .then(response => response.json())
//         .then(data1 => setPostJSON(data1))
//     },[]);
//     console.log(postJSON)


//     return (<>
//         {/* <Listpost postitem={postJSON}/> */}
//     </>);
// } 