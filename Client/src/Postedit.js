
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Updatenewpost from "./Components/Post/Updatenewpost";
import Navigation from './Components/All/navigation';

export default function Postedit() {

    let { id } = useParams();


    return (<>
        <Nav />
        <Navigation navigation="Update Post"/>
        <div className="masthead1 bg-light">
            <div className="container card0">
                <div className="row gx-5 px-md-3 py-2 py-md-5 d-flex bg-white justify-content-center">
                    <div className=" ">
                        <Updatenewpost Postid={id} />
                    </div>
                </div>
            </div>
        </div>

    </>);
}