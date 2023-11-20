import React from 'react';
import Header from './Header';
import '../css/ExcerciseList.css'
import Excercise from './Excercise';
import Button from './Button';
import { Link } from 'react-router-dom';

function ExcerciseList (props) {
    return (
        <div>
            <Header></Header>
            <h1>Excercises</h1>
           {props.excercises.map((excercise) => 
           (<div>
            <Excercise body={excercise.bodyPart} equipment={excercise.equipment} excercise={excercise.title} image={excercise.image}></Excercise>
           </div>))}
           <Link to="../excercises/create-excercise"><Button className="add">Add New Excercise</Button></Link>
        </div>
    )
}

export default ExcerciseList;