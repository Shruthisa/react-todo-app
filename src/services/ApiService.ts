import { Todo } from "../Interfaces/ITodo";

export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await fetch('https://dummyjson.com/todos');
    const data = await response.json();
    return data.todos || [];
  };
  