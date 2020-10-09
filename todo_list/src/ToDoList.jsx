import React from 'react';
import CheckButton from "./checkButton"

const ToDoList = (props) => {
    return (
        <ul>
            {props.tasks.map(({ task, isComplete }) => {
                return <li className={isComplete === true ? "complete" : "incomplete"} key={task}>{task}
                    <CheckButton toggleTask={props.toggleTask} task={task} />
                    <button key={`${task}-delete`} id={`${task}`} onClick={props.deleteTask}>Delete</button></li>
            })}
        </ul>
    )
}

export default ToDoList;
