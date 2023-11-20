import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import '../css/EditExercise_form.css';

const EditExerciseForm = props => {
    const[enteredBodyPart,setEnteredBodyPart] = useState('')
    const[enteredEquipment,setEnteredEquipment] = useState('')
    const[enteredExercise,setEnteredExercise] = useState('')
    const[enteredImage,setEnteredImage] = useState('')
    
    const addUserHandler = event => {
      event.preventDefault();
    
      const newEditExercise ={
        id: props.id,
        title: enteredExercise,
        bodyPart: enteredBodyPart,
        equipment: enteredEquipment,
        image: enteredImage
      };
      setEnteredBodyPart('');
      setEnteredEquipment('');
      setEnteredExercise('');
      setEnteredImage('');

      

      const excerciseHandler = (() => {
        enteredExercise.length !==0 & enteredBodyPart.length !==0 & enteredEquipment.length !== 0 ?
        props.onAddEditExercise((newList) => newList.map((item) => props.id === item.id ? item = newEditExercise : item = item))
        : props.onAddEditExercise((newList) => newList)
    });

    const alertHandler = (() => {
      enteredExercise.length !==0 & enteredBodyPart.length !==0 & enteredEquipment.length !== 0 ? alert("Excercise modified successfully.")
      : alert("Excercise not modified. Check that you entered some sort of value for Body Part, Excercise, and Equipment.")
    })

    excerciseHandler();
    alertHandler();


    
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
            <Button type="submit" className="submit-button">Confirm Edit</Button>
          </form>
        </Card>
      );
    };
    
    export default EditExerciseForm;
    