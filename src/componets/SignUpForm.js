import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import '../css/SignUp_form.css';

import { useNavigate } from 'react-router-dom';

const SignUpForm = props => {
    const[enteredEmailAddress,setEnteredEmailAddress] = useState('')
    const[enteredUsername,setEnteredUsername] = useState('')
    const[enteredPassword,setEnteredPassword] = useState('')
    const [reenteredPassword, setReenteredPassword] = useState('')

    const navigate = useNavigate()
    
    const addUserHandler = event => {
      event.preventDefault();
    
      const newSignUp ={
        id: Date.now(),
        email: enteredEmailAddress,
        password: enteredPassword,
        name: enteredUsername,
        date: Date(),
        workouts: [],
      };

      

      var emailExist = false

      for (let i = 0; i < props.userList.length; i++) {
        if (props.userList[i].email === enteredEmailAddress) {
          emailExist = true
          break
        }
      }


      if (emailExist === true) {
        alert("This email address is already in use.")
        setEnteredEmailAddress('');
        setEnteredUsername('');
        setEnteredPassword('');
        setReenteredPassword('');

      } else if (enteredPassword.length < 8) {
        alert("Password must have at least 8 characters.")
        setEnteredPassword('');
        setReenteredPassword('');

      } else if (enteredPassword !== reenteredPassword) {
        alert("Both password fields must match.")
        setEnteredPassword('');
        setReenteredPassword('');

      } else {
        props.setUserList(props.userList.concat([newSignUp]))
        alert("New user successfully created")
        setEnteredEmailAddress('');
        setEnteredUsername('');
        setEnteredPassword('');
        setReenteredPassword('');
        navigate("../login")
      }
    
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
              type="password"
              value ={enteredPassword}
              onChange = {(e)=>{setEnteredPassword(e.target.value)}}
            />
            <label>Reenter Password</label>
            <input
              id="repassword"
              type="password"
              value ={reenteredPassword}
              onChange = {(e)=>{setReenteredPassword(e.target.value)}}
            />
            <Button type="submit">Sign Up</Button>
          </form>
        </Card>
      );
    };
    
    export default SignUpForm;
    