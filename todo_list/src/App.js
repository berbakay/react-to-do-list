import React from 'react';
import ToDoList from './ToDoList'
import NameEntry from "./NameEntry"
import AddTask from "./AddTask"
import './App.css';

function App() {
  return (
    <div className="App">
        <NameEntry/>
        <AddTask/>
        <ToDoList/>
    </div>
  );
}

export default App;
