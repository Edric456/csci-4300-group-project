import React from 'react';
import Card from './Card';
import Button from './Button';
import '../css/ProfilePage.css';
import { Link } from 'react-router-dom';

function ProfilePage (props) {

    //Handler for whenever the user decides to logout.
    const logOutHandler = (event) => {
        props.setLogged(false);
    }



    var finalProfilePage =  
    
    <Card className="profile"><h1>Profile</h1>
    Name: {props.user.name}
    <br></br>
    Email: {props.user.email}
    <br></br>
    Date Joined: {props.user.date}
    <br></br>
    Workouts Created: {props.user.workouts}
    <br></br>
    <center><Button className="logout" onClick={logOutHandler}>Log Out</Button></center>
    </Card>;

    if (props.logged == false) {
        finalProfilePage = <Card className="profile"><h1>Profile</h1>
        <div className="notlogged">You are not logged in. Click below to either login or signup.</div>
        <br></br>
        <center>
        <Link to='/signup'><Button className="register">Sign Up</Button></Link>
        <Link to='/login'><Button className="getlogged">Log In</Button></Link>
        </center>
        </Card>
        
    }

    return (
      finalProfilePage
    );
}

export default ProfilePage;