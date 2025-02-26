import React from 'react';
import { TodoItemProps } from '../Interfaces/ITodo';

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
     <div className="todo-item">
       <span
        className={todo.completed ? "completed" : ""}
        onClick={() => toggleTodo(todo.id)}
      >
         {todo?.todo}
      </span>
      <button className="delete" onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>Delete</button>
     </div>
  );
};

export default TodoItem;
