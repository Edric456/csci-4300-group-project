import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import '../css/Login_form.css';

const Login_form = props => {
    const[enteredEmailAddress,setEnteredEmailAddress] = useState('')
    const[enteredPassword,setEnteredPassword] = useState('')
    
    const addUserHandler = event => {
      event.preventDefault();
    
      const newLogin ={
        id: Math.random().toString,
        emailaddress: enteredEmailAddress,
        password: enteredPassword
      };
      setEnteredEmailAddress('');
      setEnteredPassword('');

      props.onAddLogin(newLogin);
    
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
            <label>Password</label>
            <input
              id="password"
              type="number"
              value ={enteredPassword}
              onChange = {(e)=>{setEnteredPassword(e.target.value)}}
            />
            <Button type="submit">Login</Button>
          </form>
        </Card>
      );
    };
    
    export default Login_form;
    