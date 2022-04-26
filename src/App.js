import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  
  // state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
          setFilteredTodos(todos)
          break;
    }
  }
  
  // useEffect run once
  useEffect(() => {
    getLocalTodos()
  }, []);

  // useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])

  // Save to localStorage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  // get from localStorage
  const getLocalTodos = () => {
    console.log('running getLocalTodos()')
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));

    } else {
      let todosLocal = JSON.parse(localStorage.getItem('todos'))
      console.log(todosLocal)
      setTodos(todosLocal)
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Ntita's ToDo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus}/>
      <TodoList todos={filteredTodos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
