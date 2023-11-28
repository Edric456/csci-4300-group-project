import React from 'react';
import Header from './Header';
import Routine from './Routine';

function History (props) {
    return (
        <div><Header></Header>{props.user.workouts.map((workout) => 
            (<Routine name={workout.title} date={workout.date} excercises={workout.excercises} item={workout} onAddRoutine={props.onAddRoutine}></Routine>))}
            <br/>
            <br/>
            </div>
    )
}

export default History;

