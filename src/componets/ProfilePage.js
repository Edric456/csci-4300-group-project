import React from 'react';
import Card from './Card';
import Button from './Button';
import '../css/ProfilePage.css';

function ProfilePage () {

    var test = true;

    var finalProfilePage =  
    
    <Card className="profile"><h1>Profile</h1>
    Name: TestName
    <br></br>
    Email: testemail@gmail.com
    <br></br>
    Date Joined: ??/??/????
    <br></br>
    Workouts Created: 2
    <br></br>
    <center><Button className="logout">Log Out</Button></center>
    </Card>;

    if (test == false) {
        finalProfilePage = <Card className="profile"><h1>Profile</h1>
        <div className="notlogged">You are not logged in. Click below to either login or signup.</div>
        </Card>
        
    }

    return (
      finalProfilePage
    );
}

export default ProfilePage;