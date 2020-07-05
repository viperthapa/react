import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm'

class App extends Component {
  state = {
   todos:
    [
      {id:1,content:"start the programming"},
      {id:2,content:"start the hacking"}
      

    ]
  }

  //delete the todo 
  deleteTodo = (id) => {
    const todo = this.state.todos.filter(todo => {
      return todo.id !== id
    });

    this.setState({
      todos:todo
    })

  }

  //add a new todo
  addTodo = (todo) => {
    todo.id = Math.random();
    let todonew = [...this.state.todos,todo];
    this.setState({
      todos:todonew
    })


  }


  render(){
    return (
      <div className="Todo-app container">
        <h1 className="center blue-text">MyTodo</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>


      </div>
    )
  }
}
export default App;
