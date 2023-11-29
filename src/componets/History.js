import React from 'react';
import Header from './Header';
import Routine from './Routine';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../css/History.css'

function History (props) {
    var finalWorkouts = <div><Header></Header>{props.listRoutines.map((workout) => 
        (<Routine name={workout.title} date={workout.date} excercises={workout.excercises} item={workout} onAddRoutine={props.onAddRoutine} listRoutines={props.listRoutines}></Routine>))}
        <br/>
        <br/>
        <center><Link to="../history/create-routine"><Button className="adds">Add Workout</Button></Link></center>
        </div>
    return (
        finalWorkouts
    )
}

export default History;

