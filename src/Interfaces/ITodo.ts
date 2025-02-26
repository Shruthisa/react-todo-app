// Define the type for a single Todo item
export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId?: number;
}

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export interface AddTodoProps {
  addTodo: (task: string) => void;
}

export interface FilterProps {
  setFilter: (filter: 'all' | 'completed' | 'pending') => void;
}

export interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
