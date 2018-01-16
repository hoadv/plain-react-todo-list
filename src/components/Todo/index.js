import React, { PropTypes } from 'react'
import './style.css';

const Todo = ({text, id, deleteTodo, editTodo }) => (
  <li id='todoItem' className="todo-wrapper">
    <div className="text">{text}</div>
    <div className="edit" id="editModal"><button onClick={() => editTodo(id)}>EDIT</button></div>
    <div className="delete" id="delete"><button onClick={() => deleteTodo(id)}>DELETE</button></div>
  </li>
)

export default Todo