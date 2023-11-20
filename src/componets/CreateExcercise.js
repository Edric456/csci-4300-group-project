import React from 'react';
import Header from './Header';
import AddExerciseForm from './AddExerciseForm';



function CreateExcercise (props) {
    var finalCreateForm = <div>
    <Header>
    </Header>
    <AddExerciseForm onAddExcercise={props.onAddExcercise}></AddExerciseForm>
    </div>

    if (props.logged === false) {
        finalCreateForm = <div><Header>
        </Header>
        <b><center>You are not an authenticated user and thus do not have access to this form.</center></b>
        </div>
    }
    return (
       finalCreateForm 
    )
}

export default CreateExcercise;