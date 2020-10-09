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
                this.props.addTask({ task, isComplete: false })
                this.setState({
                    newTask: ""
                })
            }}>
                <label>Enter New Task:</label>
                <input onChange={this.handleChange} type="text" value={this.state.newTask} placeholder="Add a new task..."></input>
                <button>Add task</button>
            </form>
        )
    }
}

export default AddTask;