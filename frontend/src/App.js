import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch('https://to-do-ml81.onrender.com/todos');
    const data = await response.json();
    setTodos(data);
  };

  const addTodo = async (newTodo) => {
    await fetch('https://to-do-ml81.onrender.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    });
    fetchTodos();
  };

  const toggleTodo = async (id) => {
    await fetch(`https://to-do-ml81.onrender.com/todos/${id}/toggle`, {
      method: 'PATCH',
    });
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`https://to-do-ml81.onrender.com/todos/${id}`, {
      method: 'DELETE',
    });
    fetchTodos(); 
  };

  const editTodo = async (id, updatedTodo) => {
    await fetch(`https://to-do-ml81.onrender.com/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo),
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
};

export default App;
