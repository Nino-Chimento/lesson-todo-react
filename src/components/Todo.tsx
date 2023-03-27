import { TodoProps } from '../models/TodoProps';

export const Todo = ({completed,id,title}: TodoProps) => {
  return (
    <>
      <div>{title}</div>
      <div>{completed ? 'Done' : 'To Do'}</div>
    </>
  );
};
