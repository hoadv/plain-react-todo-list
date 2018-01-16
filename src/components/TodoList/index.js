import React, { PropTypes } from 'react';
import Todo from '../Todo/';
import './style.css';

const TodoList = ({ todos, onDeleteTodo, onEditTodo }) => {
    return (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo }
            deleteTodo={onDeleteTodo}
            editTodo={onEditTodo}
            />
        )}
      </ul>
    );
  }
  
  
  export default TodoList