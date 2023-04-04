import { useEffect, useState } from 'react';
import { fetchTodos } from '../api/todosService';

export const UseTodos = () => {
  const [todos, setTodos] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetchTodos()
      .then((result) => {
        setTodos(result);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return { todos, loading, error };
};
