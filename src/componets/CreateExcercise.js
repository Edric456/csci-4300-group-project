import React from 'react';
import Header from './Header';
import AddExerciseForm from './AddExerciseForm';



function CreateExcercise (props) {
    return (
        <div>
        <Header>
        </Header>
        <AddExerciseForm onAddExcercise={props.onAddExcercise}></AddExerciseForm>
        </div>
    )
}

export default CreateExcercise;