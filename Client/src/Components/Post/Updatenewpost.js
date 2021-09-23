import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Alert, Spinner } from 'react-bootstrap';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// import 'react-input-tags-hooks/build/index.css'; // required
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {options} from './data';
const animatedComponents = makeAnimated();

export default function Updatenewpost(props) {
    const [error, setError] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [viewimage, setViewimage] = useState("");
    const [imagedata, setDImagedata] = useState("");
    const [array, setArray] = useState([]);
    const [pname, setPname] = useState('');
    const [tags, setTags] = useState([]);


    const optiondefault = tags;

    console.log(options, "options")
    console.log(optiondefault, "optiondefault")

    let url = "/showfiles/" + props.Postid;

    const fetchlist = () => {
        axios.get(url).then(response => {
            setArray(response.data)
            setTitle(response.data[0].title);
            setViewimage("/" + response.data[0].file_name);
            setTags(JSON.parse(response.data[0].tag));
            console.log(response.data[0], "psjbkfbk")
        })
    }

    useEffect(() => {
        fetchlist();
        setPname(JSON.parse(localStorage.getItem('user-info')));
    }, [])

    const handleChangeckeditor = (e, editor) => {
        const data = editor.getData();
        setDescription(data);
    }
    async function handlefile(file) {
        setDImagedata(file[0]);
        setViewimage(URL.createObjectURL(file[0]))
    }
    
    const onchangeSelect = (item) => {
        setTags(item)
    };

    async function updatearticle(e) {
        e.preventDefault();
        const account = pname.email;
        const fData = new FormData();
        fData.append("filename", imagedata);
        fData.append("title", title);
        fData.append("description", description);
        fData.append("account", account);
        fData.append("tag", JSON.stringify(tags));
        for (var pair of fData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        let url = "http://localhost:3001/updatedata/" + props.Postid;
        axios.post(url, fData)
            .then((res) => {
                console.log(res);
                if (res.data.status == 200) {
                    setError(["success", "Updated Successfully", "border"]);
                    setTimeout(() => {
                        setError([]);
                    }, 3000);
                }
            });
    }


    return (<>
        <section className="">
            <div className=" ">
                <div className="row" >
                    <div className="col-md-6 " style={styling.overflowheight}>
                        {/* <h1 className="h3 mb-3 font-weight-bold text-center">Update Post</h1> */}
                        <label for="inputEmail" className="sr-only">Title</label>
                        <input type="text" className="form-control" placeholder={"Enter Title"} defaultValue={array[0]?.title} onChange={(e) => { setTitle(e.target.value) }} /><br />
                        <label for="" className="sr-only">Description</label>
                        <CKEditor editor={ClassicEditor} data={array[0]?.description} onChange={handleChangeckeditor} />
                        <br />
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            defaultValue={tags}
                            isMulti
                            options={options}
                            onChange={onchangeSelect}
                        />
                        <br />
                        <label for="uploadfile" className="sr-only">Upload File </label>
                        <input name="file_name" id="filename" type="file" onChange={(e) => handlefile(e.target.files)} />
                        {viewimage != '' ? (
                            <figure className="mb-4"><img className="img-fluid rounded" src={viewimage} height="100" width="100" alt="..." /></figure>
                        ) : null}

                        <label for="Tag" className="sr-only">Enter Tags </label>
                        <button className="btn btn-md btn-primary btn-block" onClick={(e) => {
                            if (title == '' || description == '' || tags == '') {
                                setError(["danger", "Fill the fields"]);
                                setTimeout(() => { setError('') }, 3000);
                            } else if (imagedata == '') {
                                setError(["danger", "Upload the files"]);
                                setTimeout(() => { setError('') }, 3000);
                            }
                            else {
                                updatearticle(e)
                            }
                        }} >Update Post</button>
                        <br /><br />
                    </div>
                    <div className="col-md-6 d-flex" style={styling.overflowheight1}>
                        {title !== '' || description !== '' || viewimage !== '' ? (
                            <article className="" >
                                {/* <h2 className="text-center pb-3">Preview</h2> */}
                                <header className="mb-3 ">
                                    <h4 className="fw-bolder text-break">{title}</h4>
                                </header>
                                <div class="mb-3">
                                    {tags.map((item, i) =>
                                        <a key={i} className="badge bg-secondary mx-1 text-capitalize text-decoration-none link-light" style={{ display: "inline" }} href={"/service/search/" + item.value}>{item.value}</a>
                                    )}
                                </div>
                                {viewimage != '' ? (
                                    <figure className="mb-4"><img className="img-fluid rounded" src={viewimage} height="300" alt="..." /></figure>
                                ) : null}
                                <section className="mb-5 text-break">
                                    {ReactHtmlParser(description)}
                                </section>
                            </article>
                        ) : (
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
        overflowX: "hidden",
    },
    overflowheight1: {
        maxHeight: "50rem",
        overflowX: "auto",
    },

}