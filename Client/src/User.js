
import Nav from './Nav';
import Navigation from './Components/All/navigation';
import Username from "./Components/User/Updateprofile";

export default function User() {

  return (<>
    <Nav />
    <span className="text-capitalize"><Navigation navigation={"Edit Profile"} nav={
      <span className="text-lowercase">{JSON.parse(localStorage.getItem('user-info')).email}</span>
    }/>
    </span>

    <Username/>

  </>);
}