import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


export default function Listpost() {

    const [Postdata, setPostdata] = useState("");



    const header = {
        'Content-Type': 'application/json'
    }
    axios.get('/showfiles', { method: 'GET', header })
        .then(response => {
            console.log(response.data);
            setPostdata(response.data);
            console.log("post",Postdata)
        })

    return (<>
        
            {
                Postdata.map((item, i)=>{
                    <ul key={i}>
                        <li>{item.title}</li>
                    </ul>
                })
            }

    </>);
}