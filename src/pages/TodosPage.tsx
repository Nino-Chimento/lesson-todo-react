import React, { useEffect, useState } from 'react';

import '../App.css';

import { Todo } from '../components/Todo';
import { CreateTodo } from '../components/CreateTodo';
import { TodoProps } from '../models/TodoProps';
import { fetchTodos } from '../api/todosService';
import { ThemeContext } from '../context/ThemeContext';
import Button from '../components/Button';
import { usePosition } from '../hooks/usePosition';
import { Container } from '../components/Container';
import { UserContext } from '../context/UserContext';

export const TodosPage = () => {
  const [todos, setTodos] = useState<any>([]);
  const [todoSelectedModify, setTodoSelectedModify] = useState<TodoProps | any>(
    {}
  );

  const { position, error } = usePosition();
  console.log(position);
  

  useEffect(() => {
    fetchTodos().then((result) => {
      setTodos(result);
    });
  }, []);

  const addTodo = (newTodo: any) => {
    setTodos([...todos, newTodo]);
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChangeModify = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const todoSelected = todos.find(
      (todo) => todo.id === Number(e.target.value)
    );
    setTodoSelectedModify(todoSelected);
  };

  const handleChangeInputModify = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoSelectedModify({ ...todoSelectedModify, title: e.target.value });
  };

  const handleModify = () => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoSelectedModify.id) {
        return { ...todo, title: todoSelectedModify.title };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleChangeCompleted = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const [theme, setTheme] = useState('light');

  return (
    <>
      {' '}
      <Button
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        <div> Toggle theme</div>
      </Button>
      <div className="App">
        <header className="App-header">
          {todos.length === 0 && <div>loading</div>}
          {todos.length > 0 && (
            <>
              <CreateTodo addTodo={addTodo} />
              {todos.map((todo) => (
                <div key={todo.id}>
                  <Todo
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                  />
                  <button onClick={() => handleChangeCompleted(todo.id)}>
                    {todo.completed ? 'To do' : 'Done'}
                  </button>
                  <button onClick={() => handleDelete(todo.id)}>delete</button>
                </div>
              ))}
              <div>
                <input
                  value={todoSelectedModify?.title as any}
                  onChange={(e) => handleChangeInputModify(e)}
                  type="text"
                />
                <select onChange={(e) => handleChangeModify(e)}>
                  {todos.map((todo) => (
                    <option key={todo.id} value={todo.id}>
                      {todo.title}
                    </option>
                  ))}
                </select>
                <button
                  disabled={!todoSelectedModify?.title}
                  onClick={handleModify}
                >
                  Modify
                </button>
              </div>
            </>
          )}
        </header>
      </div>
    </>
  );
};
