import React from 'react';
import Card from './Card';
import Button from './Button';
import Header from './Header';
import '../css/ProfilePage.css';
import { Link } from 'react-router-dom';


function ProfilePage (props) {

    //Handler for whenever the user decides to logout.
    
    const logOutHandler = (event) => {
        props.setLogged(false);
    }
    



    var finalProfilePage =  
    <div>
    <Header></Header>
    <Card className="profile"><h1>Profile</h1>
    <div className="line">
    Name: {props.user.name}
    </div>
    <div className="line">Email: {props.user.email}</div>
    <div className="line">Date Joined: {props.user.date}</div>
    <div className="line">Workouts Created: {props.user.workouts.length}</div>
    <br></br>
    <center><Button className="logout" onClick={logOutHandler}>Log Out</Button></center>
    </Card>;
    </div>

    if (props.logged === false) {
        finalProfilePage = <div>
        <Header></Header>
        <Card className="profile"><h1>Profile</h1>
        <div className="notlogged">You are not logged in. Click below to either login or signup.</div>
        <br></br>
        <center>
        <Link to='/signup'><Button className="register">Sign Up</Button></Link>
        <Link to='/login'><Button className="getlogged">Log In</Button></Link>
        </center>
        </Card></div>
        
    }

    return (
      finalProfilePage
    );
}

export default ProfilePage;