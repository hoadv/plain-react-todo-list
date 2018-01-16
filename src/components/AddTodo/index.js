import React, { PropTypes } from 'react'
import './style.css';

const AddTodo = ({onSubmitTodo, editItem}) => {
  let input;

  return (
    <div className="header">
       <h2>My To Do List</h2>
       <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          onSubmitTodo(input.value, editItem ? editItem.id : null)
          // input.value = ''
          // editItem = null;
        }}>
          <input ref={node => {
            input = node; 
            if (editItem && input) {
              input.value = editItem.text;
            }

            if (!editItem && input) {
              input.value = '';
            }
          }} placeholder="Title..." id="inputTodo" />
          <button type="submit" className="addBtn" id="btnAddTodo" >
            {editItem ? 'Edit' : 'Add'}
          </button>
      </form>
    </div>
  )
}

export default AddTodo