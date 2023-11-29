import React, { useState } from 'react';

import Card from './Card';
import Button from './Button';
import '../css/AddWorkout_form.css';
import AddWorkoutExcercise from './AddWorkOutExcercise';
;

const AddWorkoutForm = props => {
     const [arrayForCount, increment] = useState([])

     const [workoutName, setWorkOutName] = useState('')

      const submitHandler = (event) => {
        let isFull = true 

        for (let i = 0; i < arrayForCount.length; i++) {
          if (arrayForCount[i].name === undefined) {
            isFull = false
            break
          }
        }

        if (workoutName === undefined) {
          isFull = false;
        }

        if (isFull === false) {
          alert("Workout not added. Be sure all excercises and name are valid.")
        } else {
          const allExcercises = arrayForCount.map((item) => item)
          const testDate = new Date(Date.now())
          props.onAddRoutine(props.listRoutines.concat([{id: Date.now(), 
            title: workoutName,
            date: String((testDate.getMonth() + 1)) + "/" + String((testDate.getDate())) + "/" + String(testDate.getFullYear()),
            excercises: allExcercises
          }]))
          increment([])
          setWorkOutName('')
          alert("Workout added.")
          console.log(props.listRoutines)
        }
      }

    
     var finalForm = <div>
      <Card className="input"><form><label>Workout Name</label><input id="workout-name" type="text" value={workoutName} onChange={(e) => setWorkOutName(e.target.value)}></input></form></Card>
      <AddWorkoutExcercise excerciseList={props.excerciseList} addExcercise={increment} currWorkout={arrayForCount}></AddWorkoutExcercise>
      <Button onClick={submitHandler}>Submit New Workout</Button>
      </div>


     return (
      finalForm
     )
    };
    
    export default AddWorkoutForm;
    