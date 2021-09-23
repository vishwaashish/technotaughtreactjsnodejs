
import { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Parser from 'html-react-parser';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Updateprofile() {
    // const [fetchemail,setfetchemail]= useState('');
    // const [fetchname,setfetchname]= useState('');
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [oldpassword, setOldpassword] = useState("");
    const [confirmpassword, setComfirmpassword] = useState("");

    const [error, setError] = useState([]);

    const [errorname, setErrorname] = useState("");



    useEffect(() => {
        setName(JSON.parse(localStorage.getItem('user-info')).name)
        setEmail(JSON.parse(localStorage.getItem('user-info')).email)
    }, [])





    const onsubmitname = (e) => {
        e.preventDefault()
        if (name == '') {
            setErrorname(`<div class="invalid-feedback">
            Filled is Empty.
        </div>`)
        } else {
            axios.post('users/updateusername', {
                "name": name,
                "email": email
            }).then((res) => {
                console.log(res);
                setErrorname(`<div class="valid-feedback">
                Updated Successfully.
            </div>`)
            }).catch((err) => console.log(err))
        }

    }
    const onsubmitpassword = (e) => {
        e.preventDefault()
        console.log(oldpassword.length, newpassword.length, confirmpassword.length)
        // console.log(erroroldpass,errornewpass,errorconpass)
        if (oldpassword == '' || newpassword == '' || confirmpassword == '') {

            setError([400, "text-danger", "Filled is Empty."]);
        } else if (oldpassword.length < 6 || newpassword.length < 6 || confirmpassword.length < 6) {
            setError([400, "text-danger", "Value should be Greater than 6!"]);
        } else if (newpassword != confirmpassword) {
            setError([400, "text-danger", "New password and Confirm password is incorrect."]);
        }
        else {
            axios.post('users/updatepassword', {
                "password": oldpassword,
                "email": email,
                "newpassword": newpassword
            }).then((res) => {
                console.log(res.data.status);
                if (res.data.status === 401) {
                    setError([400, "text-danger", "New password and Old password is incorrect."]);
                }
                if (res.data.status === 200) {
                    
                    setError([200, "text-success", "Updated Successfully..  Redirecting to Login ...."]);
                    setTimeout(()=>{
                        localStorage.removeItem('user-info');
                        history.push("/login")
                    },3000)
                }
            }).catch((err) => console.log(err))
        }

    }
    console.log(error)
    // console.log(JSON.parse(localStorage.getItem('user-info')).name, "name")
    return (<>

        <div class="masthead1 container">
            <div class="row gx-md-5 align-items-center justify-content-center">
                <div class="col-md-6 col-11 card0 p-md-5 p-3">
                    <Tabs defaultActiveKey="name" className="mb-3 justify-content-center">
                        <Tab eventKey="name" title="Edit Name">
                            <form class="was-validated" >
                                <label for="validationServer03">Name</label>
                                <input type="text" class="form-control is-valid" id="validationServer03" defaultValue={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter Name..." required />
                                {errorname !== null ? Parser(errorname) : null}
                                <br />
                                <input type="submit" value="Update" onClick={(e) => onsubmitname(e)} />
                            </form>
                        </Tab>
                        <Tab eventKey="password" title="Edit Password">
                            <form class="was-validated" >
                                <label for="validationServer02">Old Password</label>
                                <input type="password" class="form-control is-valid" id="validationServer02" placeholder="Enter Password..." onChange={(e) => { setOldpassword(e.target.value) }} required />
                                <label for="validationServer04">New Password</label>
                                <input type="password" class="form-control is-valid" id="validationServer04" placeholder="Enter Password..." onChange={(e) => { setNewpassword(e.target.value) }} required />
                                <label for="validationServer05">Confirm New Password</label>
                                <input type="password" class="form-control is-valid" id="validationServer05" placeholder="Enter Password..." onChange={(e) => { setComfirmpassword(e.target.value) }} required />

                                {error[0] === 400 || error[0] === 401 || error[0] === 200 ? (
                                    <div class={error[1]}>
                                        {error[2]}
                                    </div>) :  null}
                                <br />
                                <input type="submit" value="Update" onClick={(e) => onsubmitpassword(e)} />

                            </form>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    </>);
}