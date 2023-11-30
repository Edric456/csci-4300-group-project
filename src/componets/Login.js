import React from 'react';
import LoginForm from './LoginForm';
import Button from './Button';
import { Link } from 'react-router-dom';



function Login (props) {
    var finalLogin = <div><h1>Excercise App Login</h1><LoginForm userList={props.userList} setUser={props.setUser} users={props.userList} currUser={props.user} setRoutines={props.setRoutines} setLogged={props.setLogged}></LoginForm>
    <Link to="../"><Button>Back to Home</Button></Link>
    </div>

    if (props.logged === true) {
        finalLogin = <div><h1>You are already logged in as {props.user.name}</h1><Link to="../"><Button>Back to Home</Button></Link></div>
    }
    return (
       finalLogin
    );
}

export default Login;