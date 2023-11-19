import React from 'react';
import Header from './Header';
import '../css/ExcerciseList.css'
import Excercise from './Excercise';

function ExcerciseList (props) {
    return (
        <div>
            <Header></Header>
            <h1>Excercises</h1>
            <Excercise></Excercise>
            <Excercise></Excercise>
            <Excercise></Excercise>
        </div>
    )
}

export default ExcerciseList;