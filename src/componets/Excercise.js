import React from "react";
import '../css/Excercise.css'
import Button from "./Button";

function Excercise (props) {

    
    return (
    <div className="full-excercise">
    <div className="body-part"><h2>Body Part</h2>{props.body}</div>
    <div className="equipment"><h2>Equipment</h2>{props.equipment}</div>
    <div className="excercise"><h2>Excercise</h2>{props.excercise}</div>
    <div className="image"><h2>Image</h2><img src={props.image} alt={props.excercise}></img></div>
    <div className="edit"><Button className="edit-button">Edit</Button></div>
    <div className="delete"><Button className="delete-button">Delete</Button></div>
    </div>
    )
}


export default Excercise;