import React from 'react';

class AddTask extends React.Component {
    state = {
        newTask: ""
    }

    handleChange = (event) => {
        const newTask = event.target.value
        this.setState(() => {
            return { newTask } // Object destructuring
        })
    }

    render() {
        return (
            <form onSubmit={(event) => {
                const task = this.state.newTask
                event.preventDefault()
                this.props.addTask(task)
            }}>
                <label>Enter New Task:</label>
                <input onChange={this.handleChange} type="text" placeholder="Enter your task here..."></input>
                <button>Add task</button>
            </form>
        )
    }
}

export default AddTask;