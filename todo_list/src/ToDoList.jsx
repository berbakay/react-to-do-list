import React from 'react';

const ToDoList = (props) => {
    return (
        <ul>
            {props.tasks.map(task => {
                return <li key={task}>{task}<button key={`${task}-tick`}>check</button><button key={`${task}-delete`} id={`${task}`}onClick = {props.deleteTask}>Delete</button></li>
            })}
        </ul>
    )
}

export default ToDoList;