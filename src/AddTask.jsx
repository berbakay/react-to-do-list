import React from 'react';

class AddTask extends React.Component {
    state = {
        newTask: "",
        error: false
    }

    handleChange = (event) => {
        const newTask = event.target.value
        this.setState(() => {
            return { newTask, error: false } // Object destructuring
        })
    }

    render() {
        return (
            <div>
            <form onSubmit={(event) => {
                const task = this.state.newTask
                event.preventDefault()
                if(task === '') {
                    this.setState({
                        error: true
                    })
                } else {
                    this.props.addTask({ task, isComplete: false })
                    this.setState({
                        newTask: ""
                    })
                }   
            }}>
                <input onChange={this.handleChange} type="text" value={this.state.newTask} placeholder="add a new task"></input>
                <button>Add task</button>
            </form>
            {this.state.error && <p class="error">you must enter a task name</p>}
            </div>
        )
    }
}

export default AddTask;