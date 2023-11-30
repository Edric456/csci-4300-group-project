import React from "react";
import '../css/Routine.css'
import Button from "./Button";
import { Link } from "react-router-dom";
import Card from "./Card";

function Routine (props) {

    const editIDHandler = (event) => {

        const innerIDHandler = () => {
            props.editID(props.id)
        }

        innerIDHandler();
    }

    const deleteIdHandler = (event) => {
        function notItem (item) {
            return item !== props.item
        }

        const newList = props.listRoutines.filter(notItem)

        props.onAddRoutine(newList)
        console.log(props.listRoutines)
    }



    return (
        <Card className="routine"><h1>{props.item.title} - Created {props.item.date}</h1>
        <h2>Excercises</h2>
        <ul>
            
            {props.item.excercises.map((excercise) => 
                (<li>{excercise.name}<div className="reps">{excercise.sets} 
                {excercise.sets === 1 ? " set" : " sets"}, {excercise.reps}
                {excercise.reps === 1 ? " rep" : " reps"}</div></li>)
            )}
                
        </ul>
        <div><center>
        {/*<Link to="../history/edit-routine" onClick={editIDHandler}><Button className="modify">Modify</Button></Link></div>*/}
        <Button className="del" onClick={deleteIdHandler}>Delete</Button>
        </center></div>
        </Card>
    )
}

export default Routine;
