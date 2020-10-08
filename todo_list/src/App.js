import React from 'react';
import ToDoList from './ToDoList'
import NameEntry from "./NameEntry"
import AddTask from "./AddTask"
import './App.css';

class App extends React.Component {

  state = {
    tasks: []
  }

  addTask = (task) => {
    this.setState((previousState) => {
      return { tasks: [...previousState.tasks, task] }
    })
  }
  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <NameEntry />
        <AddTask addTask={this.addTask} />
        <ToDoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
