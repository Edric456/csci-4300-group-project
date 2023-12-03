import React from 'react';
import SignUpForm from './SignUpForm';
import { Link } from 'react-router-dom';
import Button from './Button';

function SignUp (props) {

    var finalSignUp = <div><h1>Excercise App Sign Up</h1><SignUpForm userList={props.userList} setUser={props.setUser} users={props.userList} currUser={props.user} setRoutines={props.setRoutines} setLogged={props.setLogged} setUserList={props.setUserList}></SignUpForm>
    <Link to="../"><Button>Back to Home</Button></Link>
    </div>

    if (props.logged === true) {
        finalSignUp = <div><h1>You are already logged in as {props.user.name}</h1><Link to="../"><Button>Back to Home</Button></Link></div>
    }

    return (
       finalSignUp
    );
}

export default SignUp;