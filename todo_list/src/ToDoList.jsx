import React from 'react';
import CheckButton from "./checkButton"

const ToDoList = (props) => {
    return (
        <table>
            {props.tasks.map(({ task, isComplete }) => {
                return <tr><td class="textrow"  key={task}><p className={isComplete === true ? "complete" : "incomplete"}>{task}</p></td>
                    <td><CheckButton toggleTask={props.toggleTask} task={task} /></td>
                    <td><button key={`${task}-delete`} class="delete" id={`${task}`} onClick={props.deleteTask}>Del</button>
                   </td></tr>
            })}
        </table>
    )
}

export default ToDoList;
