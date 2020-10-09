import React from 'react';
class NameEntry extends React.Component {
    state = {
        name: '',
        headerName: 'Anon'
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
            <h1>{this.state.headerName}'s To-Do List</h1>
            <form onSubmit = {(event) => {
                event.preventDefault()
                this.setState(() =>  {
                    return { headerName: this.state.name }
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
            </header>
        )
    }
}

export default NameEntry;