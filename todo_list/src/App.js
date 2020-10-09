import React from 'react';
import ToDoList from './ToDoList'
import NameEntry from "./NameEntry"
import AddTask from "./AddTask"
import './App.css';

class App extends React.Component {

  state = {
    tasks: []
  }

  toggleTask = (taskToggled) => {
    this.setState((prevState) => {
      const currentState = [...prevState.tasks]
      const newState = currentState.map(task => {
        if(task.task === taskToggled) {
          const newTask = {...task}
          newTask.isComplete = !newTask.isComplete
          console.log(newTask.isComplete);
          console.log('^ newTask.isComplete');
          return newTask
        } else {
          return {...task};
        }
      })
      console.log(newState);
      return {
        tasks: newState
      }
    })
  }

  addTask = (task) => {
    this.setState((previousState) => {
      console.log(previousState.tasks);
      return { tasks: [...previousState.tasks, task] }
    })
  }

  deleteTask = (event) => {
    const id = event.target.id;
    console.log('deleting....')
    this.setState((previousState) => {
      console.dir(previousState.tasks);
      console.log('^ prevState.tasks');
      const currentTasks = [...previousState.tasks];
      const newTasks = currentTasks.filter(task => {
        console.dir({task});
        console.log('^ task in filter');
        return task.task !== id
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
        <ToDoList tasks={this.state.tasks} deleteTask = {this.deleteTask} toggleTask= {this.toggleTask}/>
      </div>
    );
  }
}

export default App;
