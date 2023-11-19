import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import '../css/EditExercise_form.css';

const EditExercise_form = props => {
    const[enteredBodyPart,setEnteredBodyPart] = useState('')
    const[enteredEquipment,setEnteredEquipment] = useState('')
    const[enteredExercise,setEnteredExercise] = useState('')
    const[enteredImage,setEnteredImage] = useState('')
    
    const addUserHandler = event => {
      event.preventDefault();
    
      const newEditExercise ={
        id: Math.random().toString,
        bodypart: enteredBodyPart,
        equipment: enteredEquipment,
        exercise: enteredExercise,
        img: enteredImage
      };
      setEnteredBodyPart('');
      setEnteredEquipment('');
      setEnteredExercise('');
      setEnteredImage('');

      props.onAddEditExercise(newEditExercise);
    
    }
      return (
        <Card className="input">
          <form onSubmit ={addUserHandler}>
            <label>Body Part</label>
            <input
              id="bodypart"
              type="text"
              value = {enteredBodyPart}
              onChange = {(e)=> {setEnteredBodyPart(e.target.value)}}
            />
            <label>Equipment</label>
            <input
              id="equipment"
              type="text"
              value = {enteredEquipment}
              onChange = {(e)=> {setEnteredEquipment(e.target.value)}}
            />
            <label>Exercise</label>
            <input
              id="exercise"
              type="text"
              value ={enteredExercise}
              onChange = {(e)=>{setEnteredExercise(e.target.value)}}
            />
            <label>Image Link</label>
            <input
              id="img"
              type="text"
              value ={enteredImage}
              onChange = {(e)=>{setEnteredImage(e.target.value)}}
            />
            <Button type="submit">Confirm Edit</Button>
          </form>
        </Card>
      );
    };
    
    export default EditExercise_form;
    