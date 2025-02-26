import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import { fetchTodos } from '../services/ApiService';
import { Todo } from '../Interfaces/ITodo';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  // Fetch todos from localStorage or API
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
    if (storedTodos.length) {
      setTodos(storedTodos);
    } else {
      fetchTodos().then(fetchedTodos => setTodos(fetchedTodos));
    }
  }, []);

  // Persist todos in localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (task: string) => {
    const newTodo = {
      id: Date.now(),
      todo: task,
      completed: false,
    };
  
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  // Toggle the completion status of a todo
  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Filter todos based on the selected filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className='todo-app'>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoApp;
