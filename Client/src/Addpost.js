import Addnewpost from "./Components/Post/Addnewpost";
import Nav from "./Nav";
import Navigation from './Components/All/navigation';

export default function Addpost() {

    return (<>
        <Nav />
        <Navigation navigation="Add Post"/>
        <div className="masthead1 bg-light">
            <div className="container card0">
                <div className="row gx-5 px-md-3 p-2 py-md-5 d-flex bg-white justify-content-center">
                    <div className="">
                        <Addnewpost />
                    </div>
                </div>
            </div>
        </div>
    </>);
}