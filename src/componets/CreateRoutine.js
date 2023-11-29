import React from 'react';
import Header from './Header';
import AddWorkoutForm from './AddWorkoutForm';

function CreateRoutine (props) {
    var finalCreateForm = <div>
    <Header>
    </Header>
    <AddWorkoutForm onAddRoutine={props.onAddRoutine} excerciseList={props.excerciseList} listRoutines={props.listRoutines}></AddWorkoutForm>
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

export default CreateRoutine;