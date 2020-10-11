import React from "react"

class CheckButton extends React.Component {
    state = {
        taskComplete: false
    }

    toggleCheck = () => {
        this.setState((prevState) => {
            return {
                taskComplete: !prevState.taskComplete
            }
        })
    }

    onClick = () => {
        this.toggleCheck()
        this.props.toggleTask(this.props.task)
    }

    render() {
        return (
            <button class="checkButton" id={this.props.task} onClick={this.onClick}>{this.state.taskComplete ? <span role="img" aria-label="tick">😁</span> : <p>     </p>}</button>
        )
    }
}

export default CheckButton