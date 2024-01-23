// App.js

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importez les icônes Font Awesome nécessaires

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="container">
      <header>
        <h1 className="header-title" title="Just Do It">
          Just Do It
        </h1>
        <div className="social-icons">
          {/* GitHub */}
          <a href="https://github.com/ZAWA9HAMZA" target="_blank" rel="noopener noreferrer" className="icon-content link">
            <FaGithub className="icon" />
            <span className="tooltip">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/hamza-ezzouek-a99aa327a/" target="_blank" rel="noopener noreferrer" className="icon-content link">
            <FaLinkedin className="icon" />
            <span className="tooltip">LinkedIn</span>
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/HEzzouek" target="_blank" rel="noopener noreferrer" className="icon-content link">
            <FaTwitter className="icon" />
            <span className="tooltip">Twitter</span>
          </a>

          <a href="https://www.instagram.com/zawa9.1.7/" target="_blank" rel="noopener noreferrer" className="icon-content link">
  {/* Replace with the appropriate Instagram icon component */}
            <FaInstagram className="icon" />
            <span className="tooltip">Instagram</span>
          </a>
        </div>
      </header>

      <div className="app-wrapper">
        <main>
          {/* ... */}
        </main>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
            setInput={setInput}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
