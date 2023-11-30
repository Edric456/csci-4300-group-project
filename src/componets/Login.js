import React from 'react';
import LoginForm from './LoginForm';


function Login (props) {
    var finalLogin = <LoginForm userList={props.userList} setUser={props.setUser} users={props.userList} currUser={props.user} setRoutines={props.setRoutines}></LoginForm>

    if (props.logged == true) {
        finalLogin = <div><h1>You are already logged in as {props.user.name}</h1></div>
    }
    return (
       finalLogin
    );
}

export default Login;