export const fetchTodos = async () => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const response = await result.json();
  return response;
};
