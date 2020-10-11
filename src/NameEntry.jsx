import React from 'react';

class NameEntry extends React.Component {
    state = {
        name: '',
        headerName: '',
        done: false,
        error: false
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
                if(this.state.name === '') {
                    this.setState({
                        error: true
                    })
                } else {
                    this.props.nameAdded();
                    this.setState(() =>  {
                        return { headerName: this.state.name,
                        done: !this.state.done }
                    })
                    this.setState({
                        name : ""
                    })
                }}
            }
            >
                <input type="text" placeholder="enter your name" onChange={this.handleChange} value={this.state.name}></input>
                <button>submit</button>
                {this.state.error && <p class="error">you must enter a name</p>}
            </form>
            }
            {this.state.done && <p>scroll down</p>}
            </header>
        )
    }
}

export default NameEntry;