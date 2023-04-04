import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { TodoProps } from '../models/TodoProps';

export const Todo = ({ completed, id, title }: TodoProps) => {
  const theme = useContext(ThemeContext);
 
  const style = {
    backgroundColor: theme.theme === 'light' ? 'white' : 'black',
    color:  theme.theme === 'light' ? 'black' : 'white'
  };
  return (
    <div style={style}>
      <div>{title}</div>
      <div>{completed ? 'Done' : 'To Do'}</div>
    </div>
  );
};
