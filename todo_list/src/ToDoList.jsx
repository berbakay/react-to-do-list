import React from 'react';

const ToDoList = (props) => {
    return (
        <ul>
            <li id="task-1">Task 1 <button id="button-check-1"className="button-check">Check</button><button id="button-delete-1"className="button-delete">Delete</button></li>
            <li id="task-2">Task 2 <button id="button-check-2"className="button-check">Check</button><button id="button-delete-2"className="button-delete">Delete</button></li>
            <li id="task-3">Task 3 <button id="button-check-3"className="button-check">Check</button><button id="button-delete-3"className="button-delete">Delete</button></li>
        </ul>
    )
}

export default ToDoList;