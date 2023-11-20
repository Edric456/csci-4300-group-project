import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import '../css/AddWorkout_form.css';

const AddWorkout_form = props => {
    const[enteredExercise,setEnteredExercise] = useState('')
    const[enteredSets,setEnteredSets] = useState('')
    const[enteredReps,setEnteredReps] = useState('')
    
    const addUserHandler = event => {
      event.preventDefault();
    
      const newWorkout ={
        id: Math.random(),
        exercise: enteredExercise,
        sets: enteredReps,
        reps: enteredReps

      };
      setEnteredExercise('');
      setEnteredSets('');
      setEnteredReps('');

      props.onAddWorkout(newWorkout);
    
    }
      return (
        <Card className="input">
          <form onSubmit ={addUserHandler}>
            <label>Exercise</label>
            <input
              id="exercise"
              type="text"
              value ={enteredExercise}
              onChange = {(e)=>{setEnteredExercise(e.target.value)}}
            />
            <label>Number of sets</label>
            <input
              id="sets"
              type="number"
              value = {enteredSets}
              onChange = {(e)=> {setEnteredSets(e.target.value)}}
            />
            <label>Number of reps</label>
            <input
              id="reps"
              type="number"
              value = {enteredReps}
              onChange = {(e)=> {setEnteredReps(e.target.value)}}
            />
            
            <Button type="submit">Add New Workout</Button>
          </form>
        </Card>
      );
    };
    
    export default AddWorkout_form;
    