import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import '../css/Login_form.css';

import { useNavigate } from 'react-router-dom';

const LoginForm = props => {
    const[enteredEmailAddress,setEnteredEmailAddress] = useState('')
    const[enteredPassword,setEnteredPassword] = useState('')

    const navigate = useNavigate()
    
    const addUserHandler = event => {
      event.preventDefault();
      

      let foundEmail = false
      let matchPassword = false

      for (let i = 0; i < props.userList.length; i++) {
        if (props.userList[i].email === enteredEmailAddress) {
          foundEmail = true
          if (props.userList[i].password === enteredPassword) {
            matchPassword = true
          }
          break;
        }
      }

      if (foundEmail === true & matchPassword === false) {
        alert("Password does not match email associated with this account. Please try again.")
        setEnteredEmailAddress('')
        setEnteredPassword('')
      } else if (foundEmail === false) {
        alert("Cannot find account associated with this email. Please try again.")
        setEnteredEmailAddress('')
        setEnteredPassword('')
      } else if (foundEmail === true & matchPassword === true) {
        function findUser (user) {
          return user.email === setEnteredEmailAddress
        }
        console.log(props.users)
        let newUser = props.users.filter(findUser)
        let actualNewUser = newUser[0]
        props.setUser(actualNewUser)
        props.setRoutines(props.currUser.workouts)

        setEnteredEmailAddress('');
        setEnteredPassword('');

        
        navigate('../')


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
            <label>Password</label>
            <input
              id="password"
              type="text"
              value ={enteredPassword}
              onChange = {(e)=>{setEnteredPassword(e.target.value)}}
            />
            <Button type="submit">Login</Button>
          </form>
        </Card>
      );
    };
    
    export default LoginForm;
    