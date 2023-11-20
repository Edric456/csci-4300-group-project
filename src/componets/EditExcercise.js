import React from 'react';
import Header from './Header';
import EditExerciseForm from './EditExerciseForm';


function EditExcercise (props) {
    var finalEditForm = <div><Header>
                        </Header>
                        <EditExerciseForm id={props.id} onAddEditExercise={props.onAddEditExercise}></EditExerciseForm></div>

    return (
        finalEditForm
    )
}

export default EditExcercise;