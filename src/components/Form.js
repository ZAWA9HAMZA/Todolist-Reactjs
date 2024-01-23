// Form.js

import React from 'react';
import { v4 as uuidV4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo(null);
    setInput('');
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([
        ...todos,
        { id: uuidV4(), title: input, completed: false },
      ]);
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="flex items-center justify-center flex-col">
      <h2 className="text-white font-bold mb-4">Your Todo List</h2>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter your task"
          className="task-input"
          value={input}
          required
          onChange={onInputChange}
        />
        <button
          title="Add"
          className="cssbuttons-io-button ml-2"
        >
          <svg height="25" width="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
          </svg>
          <span>Add</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
