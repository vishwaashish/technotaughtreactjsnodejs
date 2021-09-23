// import logo from './logo.svg';
import './App.css';
import './index.css';
// import './Components/FontAwesomeIcons';
import React from 'react';
import Home from './Home';
import Service from './Service';
import About from './About';
import Footer from './Footer';
import Postview from './Postview';
import Login from './Login';
import User from './User';
import Addpost from './Addpost';
import Postedit from './Postedit';
import Dashboard from './Dashboard';
import Imageupload from './Imageupload';
import Deletepost from './Components/Post/Deletepost';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Register from './Register';

function App() {
  const user = localStorage.getItem('user-info');
  return (
    <div className="">

      <Switch>
        <Route exact path="/" ><Home /> </Route>
        <Route exact path="/home" ><Home /> </Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/service"><Service /></Route>
        <Route exact path="/postview/:id"><Postview /></Route>
        <Route exact path="/user"><User /></Route>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route exact path="/service/search/:string"><Service /></Route>
        
      </Switch>

      {user ?
        <Switch>
          <Route exact path="/logout"></Route>
          <Route exact path="/addpost"><Addpost /></Route>
          <Route path="/postedit/:id"><Postedit /></Route>
          <Route path="/Deletepost/:id"><Deletepost /></Route>
          <Route path="/dashboard"><Dashboard /></Route>
          <Route path="/imageupload"><Imageupload /></Route>
        
        </Switch>
        :
        <Redirect to="/home" />
      }
      
      <Footer />
    </div>
  );
}




export default App;
