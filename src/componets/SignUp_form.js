import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import '../css/SignUp_form.css';

const SignUp_form = props => {
    const[enteredEmailAddress,setEnteredEmailAddress] = useState('')
    const[enteredUsername,setEnteredUsername] = useState('')
    const[enteredPassword,setEnteredPassword] = useState('')
    
    const addUserHandler = event => {
      event.preventDefault();
    
      const newSignUp ={
        id: Math.random().toString,
        emailaddress: enteredEmailAddress,
        username: enteredUsername,
        password: enteredPassword
      };
      setEnteredEmailAddress('');
      setEnteredUsername('');
      setEnteredPassword('');

      props.onAddSignUp(newSignUp);
    
    }
      return (
        <Card className="input">
          <form onSubmit ={addUserHandler}>
            <label>Email Address</label>
            <input
              id="emailaddress"
              type="text"
              value = {enteredEmailAddress}
              onChange = {(e)=> {setEnteredEmailAddress(e.target.value)}}
            />
            <label>Username</label>
            <input
              id="username"
              type="text"
              value = {enteredUsername}
              onChange = {(e)=> {setEnteredUsername(e.target.value)}}
            />
            <label>Password</label>
            <input
              id="password"
              type="number"
              value ={enteredPassword}
              onChange = {(e)=>{setEnteredPassword(e.target.value)}}
            />
            <Button type="submit">Sign Up</Button>
          </form>
        </Card>
      );
    };
    
    export default SignUp_form;
    