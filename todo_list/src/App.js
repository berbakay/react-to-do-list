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

  deleteTask = (event) => {
    const id = event.target.id;
    console.log('deleting....')
    this.setState((previousState) => {
      const currentTasks = [...previousState.tasks];
      const newTasks = currentTasks.filter(task => {
        if(task !== id) {
          return task;
        }
      })
      return {tasks: newTasks};
    })
  }
  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <NameEntry />
        <AddTask addTask={this.addTask} />
        <ToDoList tasks={this.state.tasks} deleteTask = {this.deleteTask}/>
      </div>
    );
  }
}

export default App;
