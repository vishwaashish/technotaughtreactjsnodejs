import axios from "axios";
import { useState } from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory } from 'react-router-dom';
import { Alert, Spinner } from 'react-bootstrap';
import { useEffect } from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {options} from './data';
const animatedComponents = makeAnimated();

export default function Addnewpost() {

    const [pname, setPname] = useState('');
    const [error, setError] = useState('');
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imagedata, setDImagedata] = useState("");
    const [viewimage, setViewimage] = useState("");
    const history = useHistory();
    const [tags, setTags] = useState([])
    const [tagdata, setTagdata] = useState([])
    

    const optiondefault = tags;

    const handleChange = (file) => {
        setDImagedata(file[0]);
        setViewimage(URL.createObjectURL(file[0]))
    };

    const handleChangeckeditor = (e, editor) => {
        const data = editor.getData();
        setDescription(data);
    }

    const onchangeSelect = (item) => {
        setTags(item)
    };

    useEffect(() => {
        setPname(JSON.parse(localStorage.getItem('user-info')))
    }, [])


    async function addarticle(e) {

        const account = pname.email;
        e.preventDefault();
        const fData = new FormData();
        fData.append("filename", imagedata);
        fData.append("title", title);
        fData.append("description", description);
        fData.append("account", account);
        fData.append("tag", JSON.stringify(tags));

        const headers = {
            'Content-Type': 'Content-Type',
            // 'Authorization': 'Bearer ' + pname.token,
        };
        console.log(headers);
        axios.post("http://localhost:3001/insertdata", fData)
            .then((res) => {
                console.log(res.data);
                if (res.data.status === 200) {
                    setError(["success", "Inserted Successfully", "border"]);
                    setTitle('');
                    setDescription('');
                    setDImagedata('');
                    setTimeout(() => {
                        history.push("/dashboard")
                    }, 3000);
                } else if (res.data.status === 403) {
                    setError(["info", "Access denied! Unautorized user. Please relogin", ""]);
                }
            }).catch(error => { console.log("Error:", error) })
    }

    return (<>
        {/* <Username /> */}
        
        <section className="">
            <div className=" ">
                <div className="row" >
                    <div className="col-md-6 py-2" style={styling.overflowheight}>
                        <label >Title</label>
                        <input type="text" className="form-control" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br />
                        <label >Description</label>
                        <CKEditor editor={ClassicEditor} data={description}
                            onChange={handleChangeckeditor} />
                        <br />
                        <label >Enter Tags </label>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={tags}
                            isMulti
                            options={options}
                            onChange={onchangeSelect}
                        /><br/>
                        <label>Upload File </label>
                        <input name="image" id="image" type="file" onChange={(e) => handleChange(e.target.files)} />
                        {viewimage != '' ? (
                            <figure className="mb-4"><img className="img-fluid rounded" src={viewimage} height="100" width="100" alt="..." /></figure>
                        ) : <br/>}

                        <br />
                        
                        <button className="btn btn-md btn-primary btn-block" onClick={(e) => {
                            if (title == '' || description == '' || imagedata == '' || tags == '') {
                                setError(["danger", "Fill the fields"]);
                                setTimeout(() => { setError('') }, 3000);
                            } else {
                                addarticle(e)
                            }
                        }} >Add Post</button>
                        
                    </div>
                    <div class="col-md-6 py-2 d-flex" style={styling.overflowheight}>
                        {title !== '' || description !== '' || viewimage !== '' ? (
                        <article >
                            {/* <h2 className="text-center pb-3">Preview</h2> */}
                            <header className="mb-4">
                                <h4 className="fw-bolder mb-1 text-break">{title}</h4>
                            </header>
                            <div class="mb-3">
                                    {tags.map((item, i) =>
                                        <a key={i} className="badge bg-secondary mx-1 text-capitalize text-decoration-none link-light" style={{ display: "inline" }} href={"/service/search/" + item.value}>{item.label}</a>
                                    )}
                                </div>
                            {viewimage != '' ? (
                                <figure className="mb-4"><img className="img-fluid rounded" src={viewimage}  height="300" alt="..." /></figure>
                            ) : null}
                            <section className="mb-5 text-break">
                                {ReactHtmlParser(description)}
                            </section>
                        </article>
                        ): (
                            <h2 className="text-center pb-3 m-auto">Preview</h2>)
                        }
                    </div>
                </div>
            </div>
            {error != '' ? (<Alert variant={error[0]} className="m-2" >{error[1]} <Spinner animation={error[2]} size="sm" /></Alert>) : null}
        </section>
    </>);
}

const styling = {
    overflowheight: {
        maxHeight: "50rem",
        overflowY: "auto",
        "::-webkit-scrollbar": {
            width: "2px",
        },

    },
    
}