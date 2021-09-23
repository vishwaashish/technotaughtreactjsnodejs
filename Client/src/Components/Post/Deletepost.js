import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
export default function Deletepost(){
    const [message,setMessage] = useState("");
    let {id} = useParams()
    useEffect(()=>{
    let data = localStorage.getItem('user-info');
    let info = JSON.parse(data);

    let header = {"Content-Type": "application/json",
    "Accept": "application/json",
    'Authorization': 'Bearer ' + info.access_token}
    let url = "http://127.0.0.1:8000/api/deletefile/"+ id;
    fetch(url,{header}).then(response => response.json()).then(data =>setMessage(data))
    
},[]);

    return(<><Redirect to='/dashboard'  /></>);
}