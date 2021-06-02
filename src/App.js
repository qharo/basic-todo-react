 import React, { useState } from 'react';
import './App.css';

import Form from './components/form'
import TodoList from './components/todoList'

function App() {
  const [inputText, setInputText] = useState(' ');
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <h1>
        <header>
          <h1>
            ToDoList
          </h1>
        </header>
        <Form inputText={inputText} todos = {todos} setTodos = {setTodos} setInputText = {setInputText} />
        <TodoList todos={todos} setTodos = {setTodos} />
      </h1>
    </div>
  );
}

export default App;
