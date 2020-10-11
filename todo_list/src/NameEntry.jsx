import React from 'react';
class NameEntry extends React.Component {
    state = {
        name: '',
        headerName: '',
        done: false
    }

    handleChange = (event) => {
        const input = event.target.value;
        this.setState(() => {
            return {
                name: input
            }
        })
    }
 
    render() {   
        return (
            <header className="App-header">
            <h1>{this.state.headerName === '' ? "To-Do List" : `${this.state.headerName}'s To-Do List`}</h1>
            {!this.state.done && <form onSubmit = {(event) => {
                event.preventDefault()
                this.props.nameAdded();
                this.setState(() =>  {
                    return { headerName: this.state.name,
                    done: !this.state.done }
                })
                this.setState({
                    name : ""
                })
                }}
            >
                <label>Enter Name:</label>
                <input type="text" placeholder="Enter your name..." onChange={this.handleChange} value={this.state.name}></input>
                <button>Submit Name</button>
            </form>
    }
            </header>
        )
    }
}

export default NameEntry;