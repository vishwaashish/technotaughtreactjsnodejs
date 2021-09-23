import axios from "axios";
import { useState } from "react";

export default function Imageupload() {

    const [imagedata, setDImagedata] = useState("");
    let title = "kumarad";
    let description = "asdsad";
    let account = "Testing";


    const handleChange = (file) => {
        setDImagedata(file[0]);
    };



    const  submitData = async(e) => {
        e.preventDefault();
        const fData = new FormData();
        fData.append("image", imagedata);
        fData.append("title", title);
        fData.append("description", description);
        fData.append("account", account);


        let formdata = { title, description, account };
        // axios.post("http://127.0.0.1:8000/api/upload-image",fData)
        // .then((res) => {
        //     console.log("response",res);
        // });
        await fetch("http://127.0.0.1:8000/api/upload-image", {
            method: "POST",
            body: fData,
        })

        console.log(formdata);

        console.log(fData);
    };
    return (<>

        <form >
            <label>Upload Image</label>
            <input name="image" id="image" type="file" onChange={(e) => handleChange(e.target.files)} />
            <button type="submit" onClick={submitData}>Upload </button>
        </form>

    </>);
}