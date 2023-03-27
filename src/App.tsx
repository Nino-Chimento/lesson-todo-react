import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { dataTodo } from './dataTodo';
import { Todo } from './components/Todo';
import { CreateTodo } from './components/CreateTodo';

function App() {
  const [todos, setTodos] = useState(dataTodo);
  const addTodo = (newTodo: any) => {
    setTodos([...todos, newTodo]);
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <header className="App-header">
        <CreateTodo addTodo={addTodo} />
        {todos.map((todo) => (
          <>
            <Todo id={todo.id} title={todo.title} completed={todo.completed} />{' '}
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </>
        ))}
      </header>
    </div>
  );
}

export default App;
