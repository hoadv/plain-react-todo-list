import React, { Component } from 'react';
import AddTodo from '../AddTodo/';
import TodoList from '../TodoList/';

let todoId = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [], editItem: null};
  }

  submitTodoHandler = (text, id) => {
    let todo = {id: todoId++, text: text};
    let arr =  [...this.state.todoList];
    if (id !== null) {
      arr.forEach(it => {
        if (it.id === id) {
          it.text = text;
        }
      });
      
      this.setState({ todoList: arr});
      this.setState({ editItem: null});
    } else {
      arr =   [todo, ...this.state.todoList];
      this.setState({ todoList: arr});
    }
  }

  handleDeleteTodo = (id) => {
    if (window.confirm("Are you sure want to delete this item")) {
      let arr =  [...this.state.todoList].filter(it => it.id !== id);
      this.setState({ todoList: arr});
    }
  }

  handleEditTodo = (id) => {
    let editItem = [...this.state.todoList].filter(it => it.id === id);
    this.setState({editItem: editItem[0]});
  }

  render() {
    return (
      <div className="container">
        <AddTodo  onSubmitTodo={this.submitTodoHandler} editItem={this.state.editItem}/>
        <TodoList todos={this.state.todoList} onDeleteTodo={this.handleDeleteTodo} onEditTodo={this.handleEditTodo} />
      </div>
    );
  }
}

export default App;
