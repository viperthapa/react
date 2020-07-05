import React , { Component } from 'react';

class AddTodo extends Component {

    // create an empty objects
    state = {
        content : ''
    }

    //handle the handlechange
    handleChange = (e) => {
        this.setState({
            content : e.target.value

        })
    }


    //handle the onsubmit event 
    handleSubmit = (e) => {
        e.preventDefault();

        // pass the state in anoter fucntion 
        this.props.addTodo(this.state)
        this.setState({
            content:''
        })
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a Todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }





}

export default AddTodo;