import { useState } from 'react';
import { TodoProps } from '../models/TodoProps';

interface CreateTodoProps {
  addTodo: (newTodo: TodoProps) => void;
}

export const CreateTodo = ({ addTodo }: CreateTodoProps) => {
  const [textTodo, setTextTodo] = useState('');
  const [completed, setCompleted] = useState(false);
  console.log(completed);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextTodo(e.target.value);
  };

  const handleChangeCompleted = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCompleted(e.target.value === 'true' ? true : false);
  };

  const handleTodo = () => {
    const newTodo: TodoProps = {
      id: Math.floor(Math.random() * 1000),
      title: textTodo,
      completed: completed,
    };
    addTodo(newTodo);
    setTextTodo("")
  };

  return (
    <div>
      <input
        required
        type="text"
        placeholder="Add a todo"
        onChange={(e) => handleChange(e)}
        value={textTodo}
      />
      <select onChange={(e) => handleChangeCompleted(e)}>
        <option value="true">Done</option>
        <option value="false">To do</option>
      </select>
      <button onClick={handleTodo} disabled={textTodo.length === 0}>
        Add Todo
      </button>
    </div>
  );
};
