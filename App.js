import React, { useState } from 'react';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState('');

  function addTodo() {
    if (todoText.trim() !== "") {
      setTodoList([...todoList, todoText]);
      setTodoText('');
    }
  }

  function handleInputChange(event) {
    setTodoText(event.target.value);
  }

  return (
    <div className='App'>
      <h1>To Do List</h1>
      <input 
        type='text' 
        placeholder='Add Todo Name' 
        value={todoText}
        onChange={handleInputChange} 
      />
      <input 
        type='button' 
        id='add_todo' 
        value='Add' 
        onClick={addTodo} 
      />
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
