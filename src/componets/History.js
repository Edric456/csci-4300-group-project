import React from 'react';
import Header from './Header';
import Routine from './Routine';

function History (props) {
    var finalWorkouts = <div><Header></Header>{props.listRoutines.map((workout) => 
        (<Routine name={workout.title} date={workout.date} excercises={workout.excercises} item={workout} onAddRoutine={props.onAddRoutine} listRoutines={props.listRoutines}></Routine>))}
        <br/>
        <br/>
        </div>
    return (
        finalWorkouts
    )
}

export default History;

